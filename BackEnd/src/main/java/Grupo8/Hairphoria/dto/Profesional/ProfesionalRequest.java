package Grupo8.Hairphoria.dto.Profesional;


import Grupo8.Hairphoria.dto.Horario.HorarioRequest;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ProfesionalRequest {
    private String nombre;
    private String apellido;
    private Integer documento;
    private String email;
    private Integer telefono;
    private String password;
    private String rol;
    private List<String> especialidades;
    private List<HorarioRequest> horarios;
}
