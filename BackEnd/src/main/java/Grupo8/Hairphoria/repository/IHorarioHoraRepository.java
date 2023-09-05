package Grupo8.Hairphoria.repository;

import Grupo8.Hairphoria.entity.HorarioHora;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHorarioHoraRepository extends JpaRepository<HorarioHora, Long> {
}
