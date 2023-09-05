package Grupo8.Hairphoria.service;


import Grupo8.Hairphoria.dto.Stat.StatRequest;
import Grupo8.Hairphoria.dto.Stat.StatResponse;
import Grupo8.Hairphoria.entity.Stat;
import Grupo8.Hairphoria.exceptions.BadRequestException;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.IServicioRepository;
import Grupo8.Hairphoria.repository.IStatRepository;
import Grupo8.Hairphoria.repository.IUsuarioRepository;
import Grupo8.Hairphoria.service.Interfaces.IStatService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StatService implements IStatService {

    private final IStatRepository statRepository;
    private final IUsuarioRepository usuarioRepository;
    private final IServicioRepository servicioRepository;


    @Caching(evict = {@CacheEvict(value = "servicios", allEntries = true), @CacheEvict(value = "servicio", allEntries = true), @CacheEvict(value = "clientes", allEntries = true) , @CacheEvict(value = "cliente", allEntries = true)})
    public StatResponse agregarPuntuacion(StatRequest statRequest, Long servicioId) {

        Stat stat = statRepository.findByUsuarioEmailAndServicioId(statRequest.getEmail(), servicioId).orElse(new Stat());
        if (stat.getId() == null) {
            stat.setUsuario(usuarioRepository.findByEmail(statRequest.getEmail()).orElseThrow(() -> new ResourceNotFoundException(String.format("El usuario con el email %s no existe", statRequest.getEmail()))));
            stat.setServicio(servicioRepository.findById(servicioId).orElseThrow(() -> new ResourceNotFoundException(String.format("El servicio con el id %s no existe", servicioId))));
        }

        if (statRequest.getPuntuacion() == null) {
            throw new BadRequestException("La puntación es obligatoria");
        } else {
            if (statRequest.getPuntuacion() < 0 || statRequest.getPuntuacion() > 5) {
                throw new BadRequestException("La puntación debe estar entre 0 y 5.");
            }
        }

        stat.setPuntuacion(statRequest.getPuntuacion());
        statRepository.save(stat);

        return new StatResponse(stat);
    }

    @Caching(evict = {@CacheEvict(value = "servicios", allEntries = true), @CacheEvict(value = "servicio", allEntries = true), @CacheEvict(value = "clientes", allEntries = true) , @CacheEvict(value = "cliente", allEntries = true)})
    public StatResponse agregarComentario(StatRequest statRequest, Long servicioId) {
        Stat statcomentario = statRepository.findByUsuarioEmailAndServicioId(statRequest.getEmail(), servicioId).orElse(new Stat());
        if (statcomentario.getId() == null) {
            statcomentario.setUsuario(usuarioRepository.findByEmail(statRequest.getEmail()).orElseThrow(() -> new ResourceNotFoundException(String.format("El usuario con el email %s no existe", statRequest.getEmail()))));
            statcomentario.setServicio(servicioRepository.findById(servicioId).orElseThrow(() -> new ResourceNotFoundException(String.format("El servicio con el id %s no existe", servicioId))));
        }
        if (statRequest.getComentario() == null) {
            throw new BadRequestException("Debes realizar un comentario");
        }

        statcomentario.setComentario(statRequest.getComentario());
        statRepository.save(statcomentario);
        return new StatResponse(statcomentario);
    }

    @Caching(evict = {@CacheEvict(value = "servicios", allEntries = true), @CacheEvict(value = "servicio", allEntries = true), @CacheEvict(value = "clientes", allEntries = true) , @CacheEvict(value = "cliente", allEntries = true)})
    public StatResponse eliminarComentario(StatRequest statRequest, Long servicioId) {
        Stat statEliminarComentario = statRepository.findByUsuarioEmailAndServicioId(statRequest.getEmail(), servicioId).orElseThrow(() -> new ResourceNotFoundException("No puedes borrar un comentario que no existe"));

        statEliminarComentario.setComentario(null);
        statRepository.save(statEliminarComentario);

        return new StatResponse(statEliminarComentario);
    }

    @Caching(evict = {@CacheEvict(value = "servicios", allEntries = true), @CacheEvict(value = "servicio", allEntries = true), @CacheEvict(value = "clientes", allEntries = true) , @CacheEvict(value = "cliente", allEntries = true)})
    public StatResponse marcarFavorito(StatRequest statRequest, Long servicioId) {
        Stat statMarcarFavorito = statRepository.findByUsuarioEmailAndServicioId(statRequest.getEmail(), servicioId).orElse(new Stat());
        if (statMarcarFavorito.getId() == null) {
            statMarcarFavorito.setUsuario(usuarioRepository.findByEmail(statRequest.getEmail()).orElseThrow(() -> new ResourceNotFoundException(String.format("El usuario con el email %s no existe", statRequest.getEmail()))));
            statMarcarFavorito.setServicio(servicioRepository.findById(servicioId).orElseThrow(() -> new ResourceNotFoundException(String.format("El servicio con el id %s no existe", servicioId))));
        }

        if (statRequest.getFavorito() == null) {
            throw new BadRequestException("Debes ingresar un booleano en favorito");
        }

        statMarcarFavorito.setFavorito(statRequest.getFavorito());
        statRepository.save(statMarcarFavorito);

        return new StatResponse(statMarcarFavorito);
    }
}

