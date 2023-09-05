package Grupo8.Hairphoria.dto.Servicio;


import Grupo8.Hairphoria.entity.Imagen;
import Grupo8.Hairphoria.entity.Servicio;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ServicioFavoritoResponse {

    private Long id;
    private String nombre;

    private List<String> imagen;

    public ServicioFavoritoResponse(Servicio favorito) {
        this.id = favorito.getId();
        this.nombre = favorito.getNombre();
        this.imagen = favorito.getImagen().stream().map(Imagen::getImagen).toList();
    }
}
