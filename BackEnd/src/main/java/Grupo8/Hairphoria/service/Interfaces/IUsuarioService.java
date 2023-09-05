package Grupo8.Hairphoria.service.Interfaces;

import Grupo8.Hairphoria.dto.Usuario.UsuarioRequest;
import Grupo8.Hairphoria.dto.Usuario.UsuarioResponse;

import java.util.List;

public interface IUsuarioService {

    List<UsuarioResponse> findAll();

    UsuarioResponse findById(Long id);

    UsuarioResponse save(UsuarioRequest usuario);

    UsuarioResponse updateById(Long id, UsuarioRequest usuario);

    void deleteById(Long id);
}
