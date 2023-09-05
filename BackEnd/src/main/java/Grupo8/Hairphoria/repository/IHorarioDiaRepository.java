package Grupo8.Hairphoria.repository;

import Grupo8.Hairphoria.entity.HorarioDia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IHorarioDiaRepository extends JpaRepository<HorarioDia, Long> {
}
