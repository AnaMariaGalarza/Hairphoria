package Grupo8.Hairphoria.controller;

import Grupo8.Hairphoria.dto.Categoria.CategoriaRequest;
import Grupo8.Hairphoria.dto.Categoria.CategoriaResponse;
import Grupo8.Hairphoria.service.CategoriaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
@RequiredArgsConstructor
public class CategoriaController {

    private final CategoriaService categoriaService;

    @GetMapping
    public ResponseEntity<List<CategoriaResponse>> listarCategorias() {
        return ResponseEntity.ok(categoriaService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaResponse> buscarCategoria(@PathVariable Long id) {
        return ResponseEntity.ok(categoriaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<CategoriaResponse> guardarCategoria(@RequestBody CategoriaRequest categoria) {
        return ResponseEntity.status(HttpStatus.CREATED).body(categoriaService.save(categoria));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CategoriaResponse> updateById(@PathVariable Long id, @RequestBody CategoriaRequest categoria) {
        return ResponseEntity.status(HttpStatus.OK).body(categoriaService.update(id, categoria));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCategoria(@PathVariable Long id) {
        categoriaService.deleteById(id);
        return ResponseEntity.ok("Se elimino el cliente de id: " + id);
    }

}
