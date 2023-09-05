package Grupo8.Hairphoria.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "palabras_clave")
public class PalabraClave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String palabra;

    @ManyToMany(mappedBy = "palabrasClave")
    private Set<Servicio> servicios = new LinkedHashSet<>();

}
