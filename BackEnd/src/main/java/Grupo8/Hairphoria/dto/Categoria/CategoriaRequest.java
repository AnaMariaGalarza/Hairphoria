package Grupo8.Hairphoria.dto.Categoria;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoriaRequest {
    private String especialidad;
    private String descripcion;
    private String imagen;
}
