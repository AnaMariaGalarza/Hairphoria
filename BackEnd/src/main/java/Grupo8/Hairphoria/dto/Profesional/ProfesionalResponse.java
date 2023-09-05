package Grupo8.Hairphoria.dto.Profesional;


import Grupo8.Hairphoria.dto.Horario.HorarioResponse;
import Grupo8.Hairphoria.entity.Categoria;
import Grupo8.Hairphoria.entity.HorarioHora;
import Grupo8.Hairphoria.entity.Profesional;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class ProfesionalResponse {
    private String nombre;
    private String apellido;
    private Integer documento;
    private String email;
    private Integer telefono;
    private String rol;
    private Long id;
    private List<String> especialidades;
    private List<HorarioResponse> horarios;

    public ProfesionalResponse(Profesional profesional) {
        this.nombre = profesional.getUsuario().getNombre();
        this.apellido = profesional.getUsuario().getApellido();
        this.documento = profesional.getUsuario().getDocumento();
        this.email = profesional.getUsuario().getEmail();
        this.telefono = profesional.getUsuario().getTelefono();
        this.especialidades = profesional.getCategorias().stream().map(Categoria::getEspecialidad).toList();
        this.id = profesional.getId();
        this.horarios = profesional.getHorario().getHorarioDias().stream()
                .map(horario -> new HorarioResponse(horario.getHorarioHoras().stream()
                        .map(HorarioHora::getHora).collect(Collectors.toList()), horario.getDia().name())).toList();
        this.rol = profesional.getUsuario().getRol().getUsuarioRol().name();
    }
}
