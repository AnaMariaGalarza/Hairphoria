package Grupo8.Hairphoria.dto.Turno;

import Grupo8.Hairphoria.dto.Cliente.ClienteResponse;
import Grupo8.Hairphoria.dto.Profesional.ProfesionalResponse;
import Grupo8.Hairphoria.dto.Servicio.ServicioResponse;
import Grupo8.Hairphoria.entity.Turno;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class TurnoResponse {
    private Long id;
    private LocalDateTime fecha_hora_inicio;
    private LocalDateTime fecha_hora_final;
    private ClienteResponse cliente;
    private ProfesionalResponse profesional;
    private ServicioResponse servicio;

    public TurnoResponse(Turno turno) {
        this.id = turno.getId();
        this.cliente = new ClienteResponse(turno.getCliente());
        this.profesional = new ProfesionalResponse(turno.getProfesional());
        this.servicio = new ServicioResponse(turno.getServicio());
        this.fecha_hora_inicio = turno.getFecha_hora_inicio();
        this.fecha_hora_final = turno.getFecha_hora_final();

    }
}
