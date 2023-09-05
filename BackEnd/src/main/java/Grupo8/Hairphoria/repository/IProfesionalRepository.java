package Grupo8.Hairphoria.repository;

import Grupo8.Hairphoria.entity.Profesional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProfesionalRepository extends JpaRepository<Profesional, Long> {
}
