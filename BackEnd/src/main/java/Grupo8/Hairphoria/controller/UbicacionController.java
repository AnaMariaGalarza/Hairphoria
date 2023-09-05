package Grupo8.Hairphoria.controller;

import Grupo8.Hairphoria.dto.Turno.TurnoRequest;
import Grupo8.Hairphoria.dto.Turno.TurnoResponse;
import Grupo8.Hairphoria.dto.Ubicacion.UbicacionRequest;
import Grupo8.Hairphoria.dto.Ubicacion.UbicacionResponse;
import Grupo8.Hairphoria.service.UbicacionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ubicaciones")
public class UbicacionController {
    private final UbicacionService ubicacionService;

    @GetMapping
    public ResponseEntity<List<UbicacionResponse>> findAll() {
        return ResponseEntity.ok(ubicacionService.findAll());
    }

    @GetMapping("/{ciudad}")
    public ResponseEntity<UbicacionResponse> buscarUbicacion(@PathVariable String ciudad) {
        return ResponseEntity.ok(ubicacionService.findByCiudad(ciudad));
    }

    @PutMapping("/{ciudad}")
    public ResponseEntity<UbicacionResponse> updateByCiudad(@PathVariable String ciudad, @RequestBody UbicacionRequest ubicacion) {
        return ResponseEntity.status(HttpStatus.OK).body(ubicacionService.updateByCiudad(ciudad, ubicacion));
    }

    @DeleteMapping("/{ciudad}")
    public ResponseEntity<String> deleteByCiudad(@PathVariable String ciudad) {
        ubicacionService.deleteByCiudad(ciudad);
        return ResponseEntity.ok("Se elimino la ubicación de la ciudad: " +ciudad);
    }
}
