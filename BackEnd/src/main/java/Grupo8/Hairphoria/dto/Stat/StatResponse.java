package Grupo8.Hairphoria.dto.Stat;

import Grupo8.Hairphoria.entity.Stat;
import lombok.Getter;

@Getter
public class StatResponse {

    private final String servicioNombre;
    private final String email;
    private final Boolean favorito;
    private final String comentario;
    private final Double puntuacion;

    public StatResponse(Stat stat) {
        this.servicioNombre = stat.getServicio().getNombre();
        this.email = stat.getUsuario().getEmail();
        this.favorito = stat.getFavorito();
        this.comentario = stat.getComentario();
        this.puntuacion = stat.getPuntuacion();
    }
}
