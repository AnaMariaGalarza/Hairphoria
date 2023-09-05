package Grupo8.Hairphoria.service.Interfaces;

import Grupo8.Hairphoria.dto.Stat.StatRequest;
import Grupo8.Hairphoria.dto.Stat.StatResponse;

public interface IStatService {
    StatResponse agregarPuntuacion(StatRequest statRequest, Long servicioId);

    StatResponse agregarComentario(StatRequest statRequest, Long servicioId);

    StatResponse eliminarComentario(StatRequest statRequest, Long servicioId);

    StatResponse marcarFavorito(StatRequest statRequest, Long servicioId);
}
