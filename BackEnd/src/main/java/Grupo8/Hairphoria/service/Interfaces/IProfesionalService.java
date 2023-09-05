package Grupo8.Hairphoria.service.Interfaces;

import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;
import Grupo8.Hairphoria.dto.Profesional.ProfesionalRequest;
import Grupo8.Hairphoria.dto.Profesional.ProfesionalResponse;

import java.util.List;

public interface IProfesionalService {

    List<ProfesionalResponse> findAll();

    ProfesionalResponse findById(Long id);

    ValidateMessageResponse save(ProfesionalRequest profesional);

    ProfesionalResponse update(Long id, ProfesionalRequest profesional);

    void deleteById(Long id);

}
