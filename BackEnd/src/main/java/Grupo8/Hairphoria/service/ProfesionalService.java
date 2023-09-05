package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;
import Grupo8.Hairphoria.dto.Profesional.ProfesionalRequest;
import Grupo8.Hairphoria.dto.Profesional.ProfesionalResponse;
import Grupo8.Hairphoria.entity.*;
import Grupo8.Hairphoria.exceptions.BadRequestException;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.ICategoriaRepository;
import Grupo8.Hairphoria.repository.IProfesionalRepository;
import Grupo8.Hairphoria.repository.IRolRepository;
import Grupo8.Hairphoria.repository.IUsuarioRepository;
import Grupo8.Hairphoria.service.Interfaces.IMailService;
import Grupo8.Hairphoria.service.Interfaces.IProfesionalService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProfesionalService implements IProfesionalService {

    private final IProfesionalRepository profesionalRepository;
    private final IRolRepository rolRepository;
    private final IUsuarioRepository usuarioRepository;
    private final ICategoriaRepository categoriaRepository;
    private final PasswordEncoder passwordEncoder;
    private final IMailService mailService;

    @Override
    @Cacheable("profesionales")
    public List<ProfesionalResponse> findAll() {
        return profesionalRepository.findAll().stream()
                .map(profesional -> new ProfesionalResponse(profesional)).toList();
    }


    @Override
    @Cacheable("profesional")
    public ProfesionalResponse findById(Long id) {
        return profesionalRepository.findById(id)
                .map(profesional -> new ProfesionalResponse(profesional))
                .orElseThrow(() -> new ResourceNotFoundException("No se encontro el profesional de id: " + id));
    }


    @Override
    @Caching(evict = {@CacheEvict(value = "profesionales", allEntries = true), @CacheEvict(value = "profesional", allEntries = true)})
    public ValidateMessageResponse save(ProfesionalRequest profesional) {
        if (usuarioRepository.findByEmail(profesional.getEmail()).isEmpty()) {
            Profesional profesionalToSave = new Profesional();
            Usuario usuarioToSave = new Usuario();
            usuarioToSave.setApellido(profesional.getApellido());
            usuarioToSave.setDocumento(profesional.getDocumento());
            usuarioToSave.setEmail(profesional.getEmail());
            usuarioToSave.setNombre(profesional.getNombre());

            if (profesional.getRol() == null) {
                throw new BadRequestException("El rol esta vació y es obligatorio");
            }

            usuarioToSave.setRol(rolRepository.findByUsuarioRol(UsuarioRol.valueOf(profesional.getRol().toUpperCase(Locale.ROOT)))
                    .orElseThrow(() -> new ResourceNotFoundException(String.format("El rol %s no existe, por favor revise nuevamente", profesional.getRol()))));

            usuarioToSave.setTelefono(profesional.getTelefono());
            usuarioToSave.setPassword(passwordEncoder.encode(profesional.getPassword()));
            profesionalToSave.setUsuario(usuarioToSave);
            profesionalToSave.setCategorias(profesional.getEspecialidades().stream().map(especialidad -> categoriaRepository.findByEspecialidad(especialidad)
                    .orElseThrow(() -> new ResourceNotFoundException("No se encontró la especialdiad ingresada " + especialidad))).collect(Collectors.toSet()));


            // ? ========== Horarios =========== ?

            Horario horarioToSave = new Horario();
            horarioToSave.setHorarioDias(profesional.getHorarios().stream().map(horarioRequest -> {
                HorarioDia horarioDia = new HorarioDia();
                horarioDia.setDia(Dias.valueOf(horarioRequest.getDia().toUpperCase(Locale.ROOT)));
                horarioDia.setHorarioHoras(horarioRequest.getHoras().stream().map(hora -> {
                    HorarioHora horarioHora = new HorarioHora();
                    horarioHora.setHora(hora);
                    return horarioHora;
                }).collect(Collectors.toSet()));
                return horarioDia;
            }).collect(Collectors.toSet()));

            profesionalToSave.setHorario(horarioToSave);

            Profesional profesionalSaved = profesionalRepository.save(profesionalToSave);
            mailService.send(profesionalSaved.getUsuario());

            return new ValidateMessageResponse("Profesional creado con exito, por favor revise su correo para activar su cuenta");
        } else {
            throw new BadRequestException("Ya existe un usuario registrado con el email " + profesional.getEmail());
        }
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "profesionales", allEntries = true), @CacheEvict(value = "profesional", allEntries = true)})
    public ProfesionalResponse update(Long id, ProfesionalRequest profesional) {

        Profesional profesionalToUpdate = profesionalRepository.findById(id)
                .orElseThrow(() -> new BadRequestException(String.format("El cliente con el id: %s no fue encontrado", id)));

        Usuario usuarioToUpdate = usuarioRepository.findByEmail(profesional.getEmail())
                .orElseThrow(() -> new BadRequestException(String.format("El profesional con el email: %s no fue encontrado", profesional.getEmail())));

        if (profesional.getEspecialidades() != null && !profesional.getEspecialidades().isEmpty()) {
            Set<Categoria> categoriasToUpdate = profesional.getEspecialidades().stream().map(especialidad -> categoriaRepository.findByEspecialidad(especialidad)
                    .orElseThrow(() -> new BadRequestException(String.format("El servicio  %s no fue encontrado", especialidad)))).collect(Collectors.toSet());

            profesionalToUpdate.setCategorias(categoriasToUpdate);

        }

        if (profesional.getHorarios() != null && !profesional.getHorarios().isEmpty()) {

            Horario horarioToUpdate = new Horario();
            horarioToUpdate.setHorarioDias(profesional.getHorarios().stream().map(horarioRequest -> {
                HorarioDia horarioDia = new HorarioDia();
                horarioDia.setDia(Dias.valueOf(horarioRequest.getDia().toUpperCase(Locale.ROOT)));
                horarioDia.setHorarioHoras(horarioRequest.getHoras().stream().map(hora -> {
                    HorarioHora horarioHora = new HorarioHora();
                    horarioHora.setHora(hora);
                    return horarioHora;
                }).collect(Collectors.toSet()));
                return horarioDia;
            }).collect(Collectors.toSet()));

            profesionalToUpdate.setHorario(horarioToUpdate);

        }

        if (profesional.getNombre() != null) {
            usuarioToUpdate.setNombre(profesional.getNombre());
        }
        if (profesional.getApellido() != null) {
            usuarioToUpdate.setApellido(profesional.getApellido());
        }
        if (profesional.getDocumento() != null) {
            usuarioToUpdate.setDocumento(profesional.getDocumento());
        }
        if (profesional.getPassword() != null) {
            usuarioToUpdate.setPassword(passwordEncoder.encode(profesional.getPassword()));
        }

        if (profesional.getRol() != null) {
            usuarioToUpdate.setRol(rolRepository.findByUsuarioRol(UsuarioRol.valueOf(profesional.getRol().toUpperCase(Locale.ROOT)))
                    .orElseThrow(() -> new ResourceNotFoundException(String.format("El rol %s no existe, por favor revise nuevamente", profesional.getRol()))));
        }

        usuarioRepository.save(usuarioToUpdate);
        return new ProfesionalResponse(profesionalRepository.save(profesionalToUpdate));
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "profesionales", allEntries = true), @CacheEvict(value = "profesional", allEntries = true)})
    public void deleteById(Long id) {
        findById(id);
        profesionalRepository.deleteById(id);
    }


}



