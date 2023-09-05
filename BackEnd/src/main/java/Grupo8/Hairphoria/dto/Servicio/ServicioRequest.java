package Grupo8.Hairphoria.dto.Servicio;


import Grupo8.Hairphoria.dto.Termino.TerminoRequest;
import Grupo8.Hairphoria.dto.Ubicacion.UbicacionRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServicioRequest {

    private String nombre;
    private Double precio;
    private String descripcion;
    private String especialidad;
    private TerminoRequest terminos;
    private List<String> imagen;
    private List<String> palabrasClave;
    private List<String> atributos;
    private List<UbicacionRequest> ubicaciones;

}