package Grupo8.Hairphoria.repository;

import Grupo8.Hairphoria.entity.PalabraClave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IPalabraClaveRepository extends JpaRepository<PalabraClave, Long> {
    Optional<PalabraClave> findByPalabra(String palabra);
}
