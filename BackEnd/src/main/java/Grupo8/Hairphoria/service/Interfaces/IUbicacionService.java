package Grupo8.Hairphoria.service.Interfaces;

import Grupo8.Hairphoria.dto.Ubicacion.UbicacionRequest;
import Grupo8.Hairphoria.dto.Ubicacion.UbicacionResponse;

import java.util.List;

public interface IUbicacionService {
    List<UbicacionResponse> findAll();
    UbicacionResponse findByCiudad(String cuidad);
    UbicacionResponse updateByCiudad(String ciudad, UbicacionRequest ubicacion);
    void deleteByCiudad(String ciudad);

}
