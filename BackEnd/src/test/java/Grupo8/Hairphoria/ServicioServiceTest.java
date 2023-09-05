package Grupo8.Hairphoria;

import Grupo8.Hairphoria.dto.Servicio.ServicioRequest;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.*;
import Grupo8.Hairphoria.service.ServicioService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@SpringBootTest
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
    private ServicioService servicioService;

    @Test
    void save_InvalidEspecialidad_ShouldThrowResourceNotFoundException() {
        // Arrange
        ServicioRequest request = new ServicioRequest();
        request.setNombre("Servicio");
        request.setDescripcion("Descripción del servicio");
        request.setPrecio(10.0);
        request.setEspecialidad("Especialidad");
        when(categoriaRepository.findByEspecialidad(request.getEspecialidad())).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class, () -> servicioService.save(request));
    }
}
// Act & Assert


