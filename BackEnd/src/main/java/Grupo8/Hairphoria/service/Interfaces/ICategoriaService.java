package Grupo8.Hairphoria.service.Interfaces;

import Grupo8.Hairphoria.dto.Categoria.CategoriaRequest;
import Grupo8.Hairphoria.dto.Categoria.CategoriaResponse;

import java.util.List;

public interface ICategoriaService {

    List<CategoriaResponse> findAll();

    CategoriaResponse findById(Long id);

    CategoriaResponse save(CategoriaRequest categoria);

    CategoriaResponse update(Long id, CategoriaRequest categoria);

    void deleteById(Long id);

}
