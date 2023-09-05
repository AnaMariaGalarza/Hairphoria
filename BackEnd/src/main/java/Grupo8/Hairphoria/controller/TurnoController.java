package Grupo8.Hairphoria.controller;

import Grupo8.Hairphoria.dto.Turno.TurnoRequest;
import Grupo8.Hairphoria.dto.Turno.TurnoResponse;
import Grupo8.Hairphoria.service.TurnoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/turnos")
public class TurnoController {

    private final TurnoService turnoService;

    @GetMapping
    public ResponseEntity<List<TurnoResponse>> listarTurnos() {
        return ResponseEntity.ok(turnoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TurnoResponse> buscarTurno(@PathVariable Long id) {
        return ResponseEntity.ok(turnoService.findById(id));
    }

    @PostMapping
    public ResponseEntity<TurnoResponse> guardarTurno(@RequestBody TurnoRequest turno) {
        return ResponseEntity.status(HttpStatus.CREATED).body(turnoService.save(turno));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TurnoResponse> updateById(@PathVariable Long id, @RequestBody TurnoRequest turno) {
        return ResponseEntity.status(HttpStatus.OK).body(turnoService.update(id, turno));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarTurno(@PathVariable Long id) {
        turnoService.deleteById(id);
        return ResponseEntity.ok("Se elimino el turno de id: " + id);
    }
}
