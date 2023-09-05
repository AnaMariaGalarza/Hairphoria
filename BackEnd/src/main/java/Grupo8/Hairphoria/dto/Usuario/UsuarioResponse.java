package Grupo8.Hairphoria.dto.Usuario;

import Grupo8.Hairphoria.entity.Usuario;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UsuarioResponse {
    private String nombre;
    private String apellido;
    private Integer documento;
    private String email;
    private Integer telefono;

    public UsuarioResponse(Usuario usuario) {
        this.nombre = usuario.getNombre();
        this.apellido = usuario.getApellido();
        this.documento = usuario.getDocumento();
        this.email = usuario.getEmail();
        this.telefono = usuario.getTelefono();
    }
}
