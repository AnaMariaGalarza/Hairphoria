package Grupo8.Hairphoria.dto.Categoria;

import Grupo8.Hairphoria.entity.Categoria;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CategoriaResponse {
    private String especialidad;
    private String descripcion;
    private String imagen;

    public CategoriaResponse(Categoria categoria) {
        this.especialidad = categoria.getEspecialidad();
        this.descripcion = categoria.getDescripcion();
        this.imagen = categoria.getImagen();
    }
}
