package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.dto.Usuario.UsuarioRequest;
import Grupo8.Hairphoria.dto.Usuario.UsuarioResponse;
import Grupo8.Hairphoria.entity.Usuario;
import Grupo8.Hairphoria.exceptions.BadRequestException;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.IUsuarioRepository;
import Grupo8.Hairphoria.service.Interfaces.IUsuarioService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioService implements IUsuarioService, UserDetailsService {
    private final IUsuarioRepository usuarioRepository;

    @Override
    @Cacheable("usuarios")
    public List<UsuarioResponse> findAll() {
        return usuarioRepository.findAll().stream()
                .map(UsuarioResponse::new).toList();
    }


    @Override
    @Cacheable("usuario")
    public UsuarioResponse findById(Long id) {
        return usuarioRepository.findById(id)
                .map(UsuarioResponse::new)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("El cliente con el id: %s no fue encontrado", id)));
    }


    @Override
    @Caching(evict = {@CacheEvict(value = "usuarios", allEntries = true), @CacheEvict(value = "usuario", allEntries = true)})
    public UsuarioResponse save(UsuarioRequest usuario) {
        usuarioRepository.findByEmail(usuario.getEmail()).ifPresent(u -> {
            throw new BadRequestException("Ya existe un usuario registrado con el email " + usuario.getEmail());
        });
        Usuario usuarioToSave = new Usuario();
        usuarioToSave.setNombre(usuario.getNombre());
        usuarioToSave.setApellido(usuario.getApellido());
        usuarioToSave.setDocumento(usuario.getDocumento());
        usuarioToSave.setTelefono(usuario.getTelefono());
        usuarioToSave.setEmail(usuario.getEmail());
        usuarioToSave.setPassword(usuario.getPassword());
        return new UsuarioResponse(usuarioRepository.save(usuarioToSave));
    }


    @Override
    @Caching(evict = {@CacheEvict(value = "usuarios", allEntries = true), @CacheEvict(value = "usuario", allEntries = true)})
    public UsuarioResponse updateById(Long id, UsuarioRequest usuario) {

        Usuario usuarioToUpdate = usuarioRepository.findById(id)
                .orElseThrow(() -> new BadRequestException(String.format("El usuario con el id: %s no fue encontrado", id)));

        if (usuario.getNombre() != null) {
            usuarioToUpdate.setNombre(usuario.getNombre());
        }
        if (usuario.getApellido() != null) {
            usuarioToUpdate.setApellido(usuario.getApellido());
        }
        if (usuario.getDocumento() != null) {
            usuarioToUpdate.setDocumento(usuario.getDocumento());
        }
        if (usuario.getEmail() != null) {
            usuarioToUpdate.setEmail(usuario.getEmail());
        }
        if (usuario.getTelefono() != null) {
            usuarioToUpdate.setTelefono(usuario.getTelefono());
        }
        if (usuario.getPassword() != null) {
            usuarioToUpdate.setPassword(usuario.getPassword());
        }
        return new UsuarioResponse(usuarioRepository.save(usuarioToUpdate));
    }


    @Override
    @Caching(evict = {@CacheEvict(value = "usuarios", allEntries = true), @CacheEvict(value = "usuario", allEntries = true)})
    public void deleteById(Long id) {
        findById(id);
        usuarioRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usuarioRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("El email no existe en la base de datos, reintentelo con un correo valido"));
    }
}
