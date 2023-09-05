package Grupo8.Hairphoria.controller;

import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;
import Grupo8.Hairphoria.dto.Cliente.ClienteRequest;
import Grupo8.Hairphoria.dto.Cliente.ClienteResponse;
import Grupo8.Hairphoria.service.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteService clienteService;

    @GetMapping
    public ResponseEntity<List<ClienteResponse>> listarClientes() {
        return ResponseEntity.ok(clienteService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteResponse> buscarCliente(@PathVariable Long id) {
        return ResponseEntity.ok(clienteService.findById(id));
    }

    @PostMapping
    public ResponseEntity<ValidateMessageResponse> guardarCliente(@RequestBody ClienteRequest cliente) {
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteService.save(cliente));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClienteResponse> updateById(@PathVariable Long id, @RequestBody ClienteRequest cliente) {
        return ResponseEntity.status(HttpStatus.OK).body(clienteService.update(id, cliente));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarCliente(@PathVariable Long id) {
        clienteService.deleteById(id);
        return ResponseEntity.ok("Se elimino el cliente de id: " + id);
    }
}
