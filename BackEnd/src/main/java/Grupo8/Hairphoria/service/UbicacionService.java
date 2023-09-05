package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.dto.Ubicacion.UbicacionRequest;
import Grupo8.Hairphoria.dto.Ubicacion.UbicacionResponse;
import Grupo8.Hairphoria.entity.Ubicacion;
import Grupo8.Hairphoria.exceptions.BadRequestException;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.IUbicacionRepository;
import Grupo8.Hairphoria.service.Interfaces.IUbicacionService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class UbicacionService implements IUbicacionService {

    private final IUbicacionRepository ubicacionRepository;

    @Override
    public List<UbicacionResponse> findAll() {
        return ubicacionRepository.findAll().stream()
                .map(ubicacion -> new UbicacionResponse(ubicacion)).toList();
    }

    @Override
    public UbicacionResponse findByCiudad(String ciudad) {
        return ubicacionRepository.findByCiudad(ciudad)
                .map(ubicacion -> new UbicacionResponse(ubicacion))
                .orElseThrow(() -> new ResourceNotFoundException(String.format("La ciudad con este nombre:%s no se encuentra registrada", ciudad)));
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "servicios", allEntries = true), @CacheEvict(value = "servicio", allEntries = true)})
    public UbicacionResponse updateByCiudad(String ciudad, UbicacionRequest ubicacion) {
        Ubicacion ubicationToUpdate = ubicacionRepository.findByCiudad(ciudad)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("La ciudad con este nombre:%s no se encuentra registrada", ciudad)));

        if (ubicacion.getCiudad() != null && !Objects.equals(ubicacion.getCiudad(), ciudad)){
            ubicacionRepository.findByCiudad(ubicacion.getCiudad()).ifPresent(u -> {
                throw new BadRequestException(String.format("El nombre %s que intentas ingresar ya lo usa una ubicación registrada, verifica e intenta nuevamente!", ubicacion.getCiudad()));
            });
            ubicationToUpdate.setCiudad(ubicacion.getCiudad());
        }

        if (ubicacion.getCoordenadas() != null){
            ubicationToUpdate.setCoordenadas(ubicacion.getCoordenadas());
        }

        return new UbicacionResponse(ubicacionRepository.save(ubicationToUpdate));
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "servicios", allEntries = true), @CacheEvict(value = "servicio", allEntries = true)})
    public void deleteByCiudad(String ciudad) {
        Ubicacion ubicationToDelete = ubicacionRepository.findByCiudad(ciudad)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("La ciudad con este nombre: %s no se encuentra registrada", ciudad)));

        ubicacionRepository.deleteById(ubicationToDelete.getId());
    }
}
