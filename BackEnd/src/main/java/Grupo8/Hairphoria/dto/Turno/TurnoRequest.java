package Grupo8.Hairphoria.dto.Turno;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class TurnoRequest {
    private Long clienteId;

    private Long profesionalId;

    private Long servicioId;

    private LocalDateTime fecha_hora_inicio;

    private LocalDateTime fecha_hora_final;
}
