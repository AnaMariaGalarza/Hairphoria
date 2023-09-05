package Grupo8.Hairphoria.dto.Cliente;

import Grupo8.Hairphoria.dto.Servicio.ServicioFavoritoResponse;
import Grupo8.Hairphoria.entity.Cliente;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ClienteResponse {
    private String nombre;
    private String apellido;
    private Integer documento;
    private String email;
    private Integer telefono;
    private String rol;
    private Long id;
    private List<ServicioFavoritoResponse> serviciosFavoritos;

    public ClienteResponse(Cliente cliente) {
        this.nombre = cliente.getUsuario().getNombre();
        this.apellido = cliente.getUsuario().getApellido();
        this.documento = cliente.getUsuario().getDocumento();
        this.email = cliente.getUsuario().getEmail();
        this.telefono = cliente.getUsuario().getTelefono();
        this.id = cliente.getId();
        this.rol = cliente.getUsuario().getRol().getUsuarioRol().name();
        this.serviciosFavoritos = cliente.getUsuario().getStats().stream().filter(stat -> stat.getFavorito() != null && stat.getFavorito()).map(stat -> new ServicioFavoritoResponse(stat.getServicio())).toList();
    }
}
