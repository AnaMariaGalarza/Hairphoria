package Grupo8.Hairphoria;

import Grupo8.Hairphoria.dto.Categoria.CategoriaResponse;
import Grupo8.Hairphoria.entity.Categoria;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.ICategoriaRepository;
import Grupo8.Hairphoria.service.CategoriaService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.mockito.Mockito.*;

class CategoriaServiceTest {

    @Mock
    private ICategoriaRepository categoriaRepository;

    @InjectMocks
    private CategoriaService categoriaService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }



    @Test
    void testFindByIdNonExistingCategoria() {
        // Arrange
        Long categoryId = 2L;

        // Mocking the repository behavior
        when(categoriaRepository.findById(categoryId)).thenReturn(Optional.empty());

        // Act and Assert
        Assertions.assertThrows(ResourceNotFoundException.class, () -> {
            categoriaService.findById(categoryId);
        });

        // Verify that the repository method was called once with the correct argument
        verify(categoriaRepository, times(1)).findById(categoryId);
    }
}


