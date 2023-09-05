package Grupo8.Hairphoria.dto.Termino;

import Grupo8.Hairphoria.entity.Termino;
import Grupo8.Hairphoria.entity.TerminoCampo;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class TerminoResponse {
    private Long id;
    private List<String> politicas;
    private List<String> saludYSeguridad;
    private List<String> cancelacion;

    public TerminoResponse(Termino termino) {
        this.id = termino.getId();
        this.politicas = termino.getTerminoHairphoria().stream().map(TerminoCampo::getNombre).toList();
        this.saludYSeguridad = termino.getTerminoSaludySeguridad().stream().map(TerminoCampo::getNombre).toList();
        this.cancelacion = termino.getTerminosCancelacion().stream().map(TerminoCampo::getNombre).toList();
    }
}
