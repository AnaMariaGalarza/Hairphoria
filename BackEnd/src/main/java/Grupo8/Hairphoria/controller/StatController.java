package Grupo8.Hairphoria.controller;

import Grupo8.Hairphoria.dto.Stat.StatRequest;
import Grupo8.Hairphoria.dto.Stat.StatResponse;
import Grupo8.Hairphoria.service.Interfaces.IStatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/stats")
public class StatController {

    private final IStatService statService;

    @PostMapping("/puntuacion/{servicio_id}")
    public ResponseEntity<StatResponse> agregarPuntacion(@PathVariable(name = "servicio_id") Long servicioId, @RequestBody StatRequest statRequest) {
        return ResponseEntity.ok(statService.agregarPuntuacion(statRequest, servicioId));
    }

    @PostMapping("/comentario/{servicio_id}")
    public ResponseEntity<StatResponse> agregarComentario(@PathVariable(name = "servicio_id") Long servicioId, @RequestBody StatRequest statRequest) {
        return ResponseEntity.ok(statService.agregarComentario(statRequest, servicioId));
    }

    @DeleteMapping("/comentario/{servicio_id}")
    public ResponseEntity<Void> eliminarComentario(@PathVariable(name = "servicio_id") Long servicioId, @RequestBody StatRequest statRequest) {
        statService.eliminarComentario(statRequest, servicioId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/marcarfavorito/{servicio_id}")
    public ResponseEntity<StatResponse> marcarFavorito(@PathVariable(name = "servicio_id") Long servicioId, @RequestBody StatRequest statRequest) {
        return ResponseEntity.ok(statService.marcarFavorito(statRequest, servicioId));
    }
}
