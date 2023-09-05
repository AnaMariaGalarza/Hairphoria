package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.dto.Turno.TurnoRequest;
import Grupo8.Hairphoria.dto.Turno.TurnoResponse;
import Grupo8.Hairphoria.entity.Cliente;
import Grupo8.Hairphoria.entity.Profesional;
import Grupo8.Hairphoria.entity.Servicio;
import Grupo8.Hairphoria.entity.Turno;
import Grupo8.Hairphoria.exceptions.BadRequestException;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.IClienteRepository;
import Grupo8.Hairphoria.repository.IProfesionalRepository;
import Grupo8.Hairphoria.repository.IServicioRepository;
import Grupo8.Hairphoria.repository.ITurnoRepository;
import Grupo8.Hairphoria.service.Interfaces.ITurnoService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TurnoService implements ITurnoService {

    private final ITurnoRepository turnoRepository;
    private final IServicioRepository servicioRepository;
    private final IClienteRepository clienteRepository;
    private final IProfesionalRepository profesionalRepository;

    @Override
    @Cacheable("turnos")
    public List<TurnoResponse> findAll() {
        return turnoRepository.findAll().stream() // Convierte el array a un objeto iterable
                .map(turno -> new TurnoResponse(turno)) //  Permite transformar cada elemento de ese array a otro tipo de elemento  (Turno a TurnoResponse con el constructor)
                .toList(); // Convierte el objeto iterable a una lista convencional
    }

    @Override
    @Cacheable("turno")
    public TurnoResponse findById(Long id) {
        return turnoRepository.findById(id)
                .map(turno -> new TurnoResponse(turno))
                .orElseThrow(() -> new ResourceNotFoundException(String.format("El turno con el id: %s no fue encontrado", id)));
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "turnos", allEntries = true), @CacheEvict(value = "turno", allEntries = true)})
    public TurnoResponse save(TurnoRequest turno) {
        Cliente clienteToSave = clienteRepository.findById(turno.getClienteId())
                .orElseThrow(() -> new BadRequestException(String.format("El cliente con el id: %s no fue encontrado", turno.getClienteId())));

        Profesional profesionalToSave = profesionalRepository.findById(turno.getProfesionalId())
                .orElseThrow(() -> new BadRequestException(String.format("El profesional con el id: %s no fue encontrado", turno.getProfesionalId())));

        Servicio servicioToSave = servicioRepository.findById(turno.getServicioId())
                .orElseThrow(() -> new BadRequestException(String.format("El servicio con el id: %s no fue encontrado", turno.getServicioId())));

        Turno turnoToSave = new Turno();
        turnoToSave.setCliente(clienteToSave);
        turnoToSave.setProfesional(profesionalToSave);
        turnoToSave.setServicio(servicioToSave);
        turnoToSave.setFecha_hora_final(turno.getFecha_hora_final());
        turnoToSave.setFecha_hora_inicio(turno.getFecha_hora_inicio());

        return new TurnoResponse(turnoRepository.save(turnoToSave));
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "turnos", allEntries = true), @CacheEvict(value = "turno", allEntries = true)})
    public TurnoResponse update(Long id, TurnoRequest turno) {
        Turno turnoExistente = turnoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No se encontro el turno con id " + turno.getClienteId()));
        turnoExistente.setCliente(clienteRepository.findById(turno.getClienteId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontro el cliente con id :" + turno.getClienteId())));
        turnoExistente.setProfesional(profesionalRepository.findById(turno.getProfesionalId())
                .orElseThrow(() -> new ResourceNotFoundException("No se encontro el profesional con id :" + turno.getProfesionalId())));
        turnoExistente.setFecha_hora_inicio(turno.getFecha_hora_inicio());
        turnoExistente.setFecha_hora_final(turno.getFecha_hora_final());


        return new TurnoResponse(turnoRepository.save(turnoExistente));
    }


    @Override
    @Caching(evict = {@CacheEvict(value = "turnos", allEntries = true), @CacheEvict(value = "turno", allEntries = true)})
    public void deleteById(Long id) {
        findById(id);
        turnoRepository.deleteById(id);
    }
}
