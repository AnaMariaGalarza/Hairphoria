package Grupo8.Hairphoria.dto.Usuario;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UsuarioRequest {
    private String nombre;
    private String apellido;
    private Integer documento;
    private String email;
    private Integer telefono;
    private String password;
}
