package Grupo8.Hairphoria.service.Interfaces;

import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;
import Grupo8.Hairphoria.dto.Cliente.ClienteRequest;
import Grupo8.Hairphoria.dto.Cliente.ClienteResponse;

import java.util.List;

public interface IClienteService {

    List<ClienteResponse> findAll();

    ClienteResponse findById(Long id);

    ValidateMessageResponse save(ClienteRequest cliente);

    ClienteResponse update(Long id, ClienteRequest cliente);

    void deleteById(Long id);
}
