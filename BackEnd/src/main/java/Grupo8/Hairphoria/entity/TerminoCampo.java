package Grupo8.Hairphoria.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
public class TerminoCampo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @ManyToMany(mappedBy = "terminoHairphoria")
    private Set<Termino> terminos = new LinkedHashSet<>();

    @ManyToMany(mappedBy = "terminoHairphoria")
    private Set<Termino> terminosSaludySeguridad = new LinkedHashSet<>();

    @ManyToMany(mappedBy = "terminosCancelacion")
    private Set<Termino> terminosCancelacion = new LinkedHashSet<>();

}
