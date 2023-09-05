package Grupo8.Hairphoria.dto.Stat;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StatRequest {

    private String servicioNombre;
    private String email;
    private Boolean favorito;
    private String comentario;
    private Double puntuacion;

}
