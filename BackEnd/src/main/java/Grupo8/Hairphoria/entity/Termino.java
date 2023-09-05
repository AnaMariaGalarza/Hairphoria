package Grupo8.Hairphoria.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "terminos")
public class Termino {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToMany
    @JoinTable(name = "politicas", joinColumns = @JoinColumn(name = "termino_id"), inverseJoinColumns = @JoinColumn(name = "termino_campo_id"))
    private Set<TerminoCampo> terminoHairphoria = new LinkedHashSet<>();

    @ManyToMany
    @JoinTable(name = "salud_y_seguridad", joinColumns = @JoinColumn(name = "termino_id"), inverseJoinColumns = @JoinColumn(name = "termino_campo_id"))
    private Set<TerminoCampo> terminoSaludySeguridad = new LinkedHashSet<>();

    @ManyToMany
    @JoinTable(name = "cancelaciones", joinColumns = @JoinColumn(name = "termino_id"), inverseJoinColumns = @JoinColumn(name = "termino_campo_id"))
    private Set<TerminoCampo> terminosCancelacion = new LinkedHashSet<>();

}
