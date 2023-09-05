package Grupo8.Hairphoria.repository;

import Grupo8.Hairphoria.entity.TerminoCampo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITerminoCampoRepository extends JpaRepository<TerminoCampo, Long> {
}
