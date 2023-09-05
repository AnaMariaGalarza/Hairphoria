package Grupo8.Hairphoria.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "horariohoras")
public class HorarioHora {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalTime hora;

    @ManyToMany(mappedBy = "horarioHoras")
    private Set<HorarioDia> horarioDias = new LinkedHashSet<>();

}