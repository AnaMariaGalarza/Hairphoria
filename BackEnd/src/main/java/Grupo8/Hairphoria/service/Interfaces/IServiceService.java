package Grupo8.Hairphoria.service.Interfaces;

import Grupo8.Hairphoria.dto.Servicio.ServicioRequest;
import Grupo8.Hairphoria.dto.Servicio.ServicioResponse;

import java.util.List;

public interface IServiceService {

    List<ServicioResponse> findAll();

    ServicioResponse findById(Long id);

    ServicioResponse save(ServicioRequest servicio);

    ServicioResponse update(Long id, ServicioRequest servicio);

    void deleteById(Long id);


}
