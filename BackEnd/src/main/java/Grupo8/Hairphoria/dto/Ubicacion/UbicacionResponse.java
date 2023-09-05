package Grupo8.Hairphoria.dto.Ubicacion;

import Grupo8.Hairphoria.entity.Ubicacion;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.geo.Point;

@Data
@AllArgsConstructor
public class UbicacionResponse {
    private String ciudad;
    private Point coordenadas;

    public UbicacionResponse(Ubicacion ubicacion) {
        this.ciudad = ubicacion.getCiudad();
        this.coordenadas = ubicacion.getCoordenadas();
    }
}
