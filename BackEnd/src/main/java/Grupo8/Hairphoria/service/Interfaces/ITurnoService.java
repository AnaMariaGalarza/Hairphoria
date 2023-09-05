package Grupo8.Hairphoria.service.Interfaces;

import Grupo8.Hairphoria.dto.Turno.TurnoRequest;
import Grupo8.Hairphoria.dto.Turno.TurnoResponse;

import java.util.List;

public interface ITurnoService {

    List<TurnoResponse> findAll();

    TurnoResponse findById(Long id);

    TurnoResponse save(TurnoRequest turno);

    TurnoResponse update(Long id, TurnoRequest turno);

    void deleteById(Long id);
}
