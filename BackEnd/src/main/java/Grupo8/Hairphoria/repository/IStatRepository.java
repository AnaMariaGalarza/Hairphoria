package Grupo8.Hairphoria.repository;

import Grupo8.Hairphoria.entity.Stat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IStatRepository extends JpaRepository<Stat, Long> {
    Optional<Stat> findByUsuarioEmailAndServicioId(String email, Long servicioId);
}
