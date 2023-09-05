package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.dto.Categoria.CategoriaRequest;
import Grupo8.Hairphoria.dto.Categoria.CategoriaResponse;
import Grupo8.Hairphoria.entity.Categoria;
import Grupo8.Hairphoria.exceptions.BadRequestException;
import Grupo8.Hairphoria.exceptions.ResourceNotFoundException;
import Grupo8.Hairphoria.repository.ICategoriaRepository;
import Grupo8.Hairphoria.service.Interfaces.ICategoriaService;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoriaService implements ICategoriaService {

    private final ICategoriaRepository categoriaRepository;

    @Override
    @Cacheable("categorias")
    public List<CategoriaResponse> findAll() {
        return categoriaRepository.findAll().stream()
                .map(categoria -> new CategoriaResponse(categoria)).toList();
    }


    @Override
    @Cacheable("categoria")
    public CategoriaResponse findById(Long id) {
        return categoriaRepository.findById(id)
                .map(categoria -> new CategoriaResponse(categoria))
                .orElseThrow(() -> new ResourceNotFoundException(String.format("La categoria con el id: %s no fue encontrado", id)));
    }

    @Override
    @Caching(evict = {@CacheEvict(value = "categorias", allEntries = true), @CacheEvict(value = "categoria", allEntries = true)})
    public CategoriaResponse save(CategoriaRequest categoria) {
        categoriaRepository.findByEspecialidad(categoria.getEspecialidad()).ifPresent(c -> {
            throw new BadRequestException("Ya existe esta especialidad " + categoria.getEspecialidad());
        });
        Categoria categoriaToSave = new Categoria();
        categoriaToSave.setEspecialidad((categoria.getEspecialidad()));
        categoriaToSave.setDescripcion(categoria.getDescripcion());
        categoriaToSave.setImagen(categoria.getImagen());
        return new CategoriaResponse(categoriaRepository.save(categoriaToSave));
    }


    @Override
    @Caching(evict = {@CacheEvict(value = "categorias", allEntries = true), @CacheEvict(value = "categoria", allEntries = true)})
    public CategoriaResponse update(Long id, CategoriaRequest categoria) {

        Categoria categoriaToUpdate = categoriaRepository.findById(id)
                .orElseThrow(() -> new BadRequestException(String.format("La categoria con el id: %s no fue encontrado", id)));
        if (categoria.getEspecialidad() != null) {
            categoriaToUpdate.setEspecialidad(categoria.getEspecialidad());
        }
        if (categoria.getDescripcion() != null) {
            categoriaToUpdate.setDescripcion(categoria.getDescripcion());
        }
        return new CategoriaResponse(categoriaRepository.save(categoriaToUpdate));
    }


    @Override
    @Caching(evict = {@CacheEvict(value = "categorias", allEntries = true), @CacheEvict(value = "categoria", allEntries = true)})
    public void deleteById(Long id) {
        findById(id);
        categoriaRepository.deleteById(id);
    }

}
