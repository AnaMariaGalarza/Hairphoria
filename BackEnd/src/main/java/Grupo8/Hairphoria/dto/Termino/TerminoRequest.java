package Grupo8.Hairphoria.dto.Termino;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class TerminoRequest {
    private Long id;
    private List<String> politicas;
    private List<String> saludYSeguridad;
    private List<String> cancelacion;
}
