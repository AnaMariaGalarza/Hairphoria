package Grupo8.Hairphoria.dto.Cliente;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClienteRequest {

    private String nombre;
    private String apellido;
    private Integer documento;
    private String email;
    private Integer telefono;
    private String password;
    private String rol;

}
