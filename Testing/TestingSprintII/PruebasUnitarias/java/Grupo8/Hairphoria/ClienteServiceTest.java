package Grupo8.Hairphoria;

import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;
import Grupo8.Hairphoria.dto.Cliente.ClienteRequest;
import Grupo8.Hairphoria.dto.Cliente.ClienteResponse;
import Grupo8.Hairphoria.entity.Cliente;
import Grupo8.Hairphoria.entity.Rol;
import Grupo8.Hairphoria.entity.Usuario;
import Grupo8.Hairphoria.entity.UsuarioRol;
import Grupo8.Hairphoria.exceptions.BadRequestException;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.IClienteRepository;
import Grupo8.Hairphoria.repository.IRolRepository;
import Grupo8.Hairphoria.repository.IUsuarioRepository;
import Grupo8.Hairphoria.service.ClienteService;
import Grupo8.Hairphoria.service.Interfaces.IMailService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

class ClienteServiceTest {

    private ClienteService clienteService;

    @Mock
    private IClienteRepository clienteRepository;
    @Mock
    private IUsuarioRepository usuarioRepository;
    @Mock
    private IRolRepository rolRepository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private IMailService mailService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        clienteService = new ClienteService(clienteRepository, usuarioRepository, rolRepository, passwordEncoder, mailService);
    }





    @Test
    void findById_NonExistingId_ShouldThrowResourceNotFoundException() {
        // Arrange
        Long id = 1L;
        when(clienteRepository.findById(id)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> clienteService.findById(id));
    }



    @Test
    void save_DuplicateEmail_ShouldThrowBadRequestException() {
        // Arrange
        ClienteRequest clienteRequest = new ClienteRequest();
        clienteRequest.setEmail("test@example.com");
        when(usuarioRepository.findByEmail(clienteRequest.getEmail())).thenReturn(Optional.of(new Usuario()));

        // Act & Assert
        assertThrows(BadRequestException.class, () -> clienteService.save(clienteRequest));
    }



    @Test
    void update_NonExistingId_ShouldThrowBadRequestException() {
        // Arrange
        Long id = 1L;
        ClienteRequest clienteRequest = new ClienteRequest();
        clienteRequest.setEmail("test@example.com");
        when(clienteRepository.findById(id)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(BadRequestException.class, () -> clienteService.update(id, clienteRequest));
    }



    @Test
    void deleteById_NonExistingId_ShouldThrowResourceNotFoundException() {
        // Arrange
        Long id = 1L;
        when(clienteRepository.findById(id)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> clienteService.deleteById(id));
    }
}

