package Grupo8.Hairphoria.controller;

import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;
import Grupo8.Hairphoria.dto.Profesional.ProfesionalRequest;
import Grupo8.Hairphoria.dto.Profesional.ProfesionalResponse;
import Grupo8.Hairphoria.service.ProfesionalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/profesionales")
public class ProfesionalController {

    private final ProfesionalService profesionalService;

    @GetMapping
    public ResponseEntity<List<ProfesionalResponse>> listarProfesionales() {
        return ResponseEntity.ok(profesionalService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProfesionalResponse> buscarProfesional(@PathVariable Long id) {
        return ResponseEntity.ok(profesionalService.findById(id));
    }

    @PostMapping
    public ResponseEntity<ValidateMessageResponse> guardarProfesional(@RequestBody ProfesionalRequest profesional) {
        return ResponseEntity.status(HttpStatus.CREATED).body(profesionalService.save(profesional));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProfesionalResponse> updateById(@PathVariable Long id, @RequestBody ProfesionalRequest profesional) {
        return ResponseEntity.status(HttpStatus.OK).body(profesionalService.update(id, profesional));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarProfesional(@PathVariable Long id) {
        profesionalService.deleteById(id);
        return ResponseEntity.ok("Se elimino el profesional de id: " + id);
    }
}
