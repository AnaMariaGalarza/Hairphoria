package Grupo8.Hairphoria;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;

import java.util.*;

import Grupo8.Hairphoria.dto.Servicio.ServicioRequest;
import Grupo8.Hairphoria.dto.Servicio.ServicioResponse;
import Grupo8.Hairphoria.entity.*;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.*;
import Grupo8.Hairphoria.service.Interfaces.IServiceService;
import Grupo8.Hairphoria.service.ServicioService;

import static org.junit.jupiter.api.Assertions.*;

public class ServicioServiceTest {

    @Mock
    private IServicioRepository servicioRepository;

    @Mock
    private ICategoriaRepository categoriaRepository;

    @Mock
    private IPalabraClaveRepository palabraClaveRepository;

    @Mock
    private IImagenRepository imagenRepository;

    @Mock
    private IAtributoRepository atributoRepository;

    @InjectMocks
    private IServiceService servicioService = new ServicioService(servicioRepository, categoriaRepository, palabraClaveRepository, imagenRepository, atributoRepository);

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }






    @Test
    void save_InvalidEspecialidad_ShouldThrowResourceNotFoundException() {
        // Arrange
        ServicioRequest request = new ServicioRequest();
        request.setNombre("Servicio");
        request.setDescripcion("Descripción del servicio");
        request.setPrecio(10.0);
        request.setEspecialidad("Especialidad");
        when(categoriaRepository.findByEspecialidad(request.getEspecialidad())).thenReturn(Optional.empty());
    }
}
        // Act & Assert


