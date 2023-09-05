package Grupo8.Hairphoria.dto.Servicio;


import Grupo8.Hairphoria.dto.Stat.StatResponse;
import Grupo8.Hairphoria.dto.Termino.TerminoResponse;
import Grupo8.Hairphoria.dto.Ubicacion.UbicacionResponse;
import Grupo8.Hairphoria.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ServicioResponse {
    private Long id;
    private String nombre;
    private Double precio;
    private List<String> imagen;
    private String descripcion;
    private String especialidad;
    private TerminoResponse terminos;
    private List<String> palabrasClave;
    private List<String> atributos;
    private List<StatResponse> stats;
    private Double starsAvg;

    private List<UbicacionResponse> ubicaciones;

    public ServicioResponse(Servicio servicio) {
        this.nombre = servicio.getNombre();
        this.precio = servicio.getPrecio();
        this.descripcion = servicio.getDescripcion();
        this.especialidad = servicio.getCategoria().getEspecialidad();
        if (servicio.getTermino() != null){
            this.terminos = new TerminoResponse(servicio.getTermino());
        }
        this.starsAvg = servicio.getStats().stream().filter(stat -> stat.getPuntuacion() != null).mapToDouble(Stat::getPuntuacion).average().orElse(0);
        this.id = servicio.getId();
        this.stats = servicio.getStats().stream().map(stat -> new StatResponse(stat)).toList();
        this.palabrasClave = servicio.getPalabrasClave().stream().map(PalabraClave::getPalabra).toList();
        this.atributos = servicio.getAtributo().stream().map(Atributo::getAtributo).toList();
        this.imagen = servicio.getImagen().stream().map(Imagen::getImagen).toList();
        this.ubicaciones = servicio.getUbicaciones().stream().map(ubicacion -> new UbicacionResponse(ubicacion)).toList();
    }

}
