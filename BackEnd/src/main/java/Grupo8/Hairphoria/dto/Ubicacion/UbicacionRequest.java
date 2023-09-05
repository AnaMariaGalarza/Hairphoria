package Grupo8.Hairphoria.dto.Ubicacion;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.geo.Point;

@Data
@AllArgsConstructor
public class UbicacionRequest {
    private String ciudad;
    private Point coordenadas;
}
