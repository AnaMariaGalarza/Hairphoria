package Grupo8.Hairphoria.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "horariodias")
public class HorarioDia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Dias dia;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "horariodias_horario_horas",
            joinColumns = @JoinColumn(name = "horario_dia_id"),
            inverseJoinColumns = @JoinColumn(name = "horario_horas_id"))
    private Set<HorarioHora> horarioHoras = new LinkedHashSet<>();

}