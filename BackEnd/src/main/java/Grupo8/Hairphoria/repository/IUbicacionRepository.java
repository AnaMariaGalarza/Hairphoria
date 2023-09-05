package Grupo8.Hairphoria.repository;


import Grupo8.Hairphoria.entity.Ubicacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUbicacionRepository extends JpaRepository<Ubicacion, Long> {
    Optional<Ubicacion> findByCiudad(String cuidad);

}
