package Grupo8.Hairphoria.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "categoria")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String especialidad;
    private String imagen;
    private String descripcion;

    @OneToMany(mappedBy = "categoria", cascade = CascadeType.REMOVE)
    private List<Servicio> servicio = new ArrayList<>();

    @ManyToMany(mappedBy = "categorias", cascade = CascadeType.REMOVE)
    private Set<Profesional> profesionals = new LinkedHashSet<>();

}
