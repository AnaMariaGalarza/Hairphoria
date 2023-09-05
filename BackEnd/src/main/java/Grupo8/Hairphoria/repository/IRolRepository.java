package Grupo8.Hairphoria.repository;

import Grupo8.Hairphoria.entity.Rol;
import Grupo8.Hairphoria.entity.UsuarioRol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRolRepository extends JpaRepository<Rol, Long> {
    Optional<Rol> findByUsuarioRol(UsuarioRol rol);
}
