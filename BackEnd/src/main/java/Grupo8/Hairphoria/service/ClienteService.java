package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;
import Grupo8.Hairphoria.dto.Cliente.ClienteRequest;
import Grupo8.Hairphoria.dto.Cliente.ClienteResponse;
import Grupo8.Hairphoria.entity.Cliente;
import Grupo8.Hairphoria.entity.Usuario;
import Grupo8.Hairphoria.entity.UsuarioRol;
import Grupo8.Hairphoria.exceptions.BadRequestException;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.IClienteRepository;
import Grupo8.Hairphoria.repository.IRolRepository;
import Grupo8.Hairphoria.repository.IUsuarioRepository;
import Grupo8.Hairphoria.service.Interfaces.IClienteService;
import Grupo8.Hairphoria.service.Interfaces.IMailService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class ClienteService implements IClienteService {

    private final IClienteRepository clienteRepository;
    private final IUsuarioRepository usuarioRepository;
    private final IRolRepository rolRepository;
    private final PasswordEncoder passwordEncoder;
    private final IMailService mailService;

    @Override
    @Cacheable("clientes")
    public List<ClienteResponse> findAll() {
        return clienteRepository.findAll().stream()
                .map(cliente -> new ClienteResponse(cliente)).toList();
    }


    @Override
    @Cacheable("cliente")
    public ClienteResponse findById(Long id) {
        return clienteRepository.findById(id)
                .map(cliente -> new ClienteResponse(cliente))
                .orElseThrow(() -> new ResourceNotFoundException(String.format("El cliente con el id: %s no fue encontrado", id)));
    }


    @Override
    @Caching(evict = {@CacheEvict(value = "clientes", allEntries = true), @CacheEvict(value = "cliente", allEntries = true)})
    public ValidateMessageResponse save(ClienteRequest cliente) {
        if (usuarioRepository.findByEmail(cliente.getEmail()).isEmpty()) {
            Cliente clienteToSave = new Cliente();
            Usuario usuarioToSave = new Usuario();
            usuarioToSave.setApellido(cliente.getApellido());
            usuarioToSave.setDocumento(cliente.getDocumento());
            usuarioToSave.setEmail(cliente.getEmail());
            usuarioToSave.setNombre(cliente.getNombre());

            if (cliente.getRol() == null) {
                throw new BadRequestException("El rol esta vació y es obligatorio");
            }

            usuarioToSave.setRol(rolRepository.findByUsuarioRol(UsuarioRol.valueOf(cliente.getRol().toUpperCase(Locale.ROOT)))
                    .orElseThrow(() -> new ResourceNotFoundException(String.format("El rol %s no existe, por favor revise nuevamente", cliente.getRol()))));

            usuarioToSave.setTelefono(cliente.getTelefono());
            usuarioToSave.setPassword(passwordEncoder.encode(cliente.getPassword()));
            clienteToSave.setUsuario(usuarioToSave);

            Cliente nuevoCliente = clienteRepository.save(clienteToSave);
            mailService.send(nuevoCliente.getUsuario());

            return new ValidateMessageResponse("Cliente creado con exito, por favor revise su correo para activar su cuenta");
        } else {
            throw new BadRequestException("Ya existe un usuario registrado con el email " + cliente.getEmail());
        }
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "clientes", allEntries = true), @CacheEvict(value = "cliente", allEntries = true)})
    public ClienteResponse update(Long id, ClienteRequest cliente) {

        Cliente clienteToUpdate = clienteRepository.findById(id)
                .orElseThrow(() -> new BadRequestException(String.format("El cliente con el id: %s no fue encontrado", id)));

        Usuario usuarioToUpdate = usuarioRepository.findByEmail(cliente.getEmail())
                .orElseThrow(() -> new BadRequestException(String.format("El usuario con el email: %s no fue encontrado", cliente.getEmail())));

        if (cliente.getNombre() != null) {
            usuarioToUpdate.setNombre(cliente.getNombre());
        }
        if (cliente.getApellido() != null) {
            usuarioToUpdate.setApellido(cliente.getApellido());
        }
        if (cliente.getDocumento() != null) {
            usuarioToUpdate.setDocumento(cliente.getDocumento());
        }
        if (cliente.getPassword() != null) {
            usuarioToUpdate.setPassword(passwordEncoder.encode(cliente.getPassword()));
        }

        if (cliente.getRol() != null) {
            usuarioToUpdate.setRol(rolRepository.findByUsuarioRol(UsuarioRol.valueOf(cliente.getRol().toUpperCase(Locale.ROOT)))
                    .orElseThrow(() -> new ResourceNotFoundException(String.format("El rol %s no existe, por favor revise nuevamente", cliente.getRol()))));
        }

        usuarioRepository.save(usuarioToUpdate);
        return new ClienteResponse(clienteRepository.save(clienteToUpdate));
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "clientes", allEntries = true), @CacheEvict(value = "cliente", allEntries = true)})
    public void deleteById(Long id) {
        findById(id);
        clienteRepository.deleteById(id);
    }

}


