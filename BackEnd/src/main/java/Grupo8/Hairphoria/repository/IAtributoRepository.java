package Grupo8.Hairphoria.repository;

import Grupo8.Hairphoria.entity.Atributo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAtributoRepository extends JpaRepository<Atributo, Long> {
}
