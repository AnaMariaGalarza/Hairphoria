package Grupo8.Hairphoria.dto.Horario;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalTime;
import java.util.List;

@Data
@AllArgsConstructor
public class HorarioRequest {
    List<LocalTime> horas;
    private String dia;
}
