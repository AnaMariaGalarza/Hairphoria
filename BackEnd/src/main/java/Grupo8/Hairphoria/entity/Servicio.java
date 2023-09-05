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
@Table(name = "servicio")
public class Servicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    @Column(length = 1000)
    private String descripcion;
    private Double precio;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(name = "servicio_palabras_clave", joinColumns = @JoinColumn(name = "servicio_id"), inverseJoinColumns = @JoinColumn(name = "palabras_clave_id"))
    private Set<PalabraClave> palabrasClave = new LinkedHashSet<>();

    @OneToMany(mappedBy = "servicio", cascade = CascadeType.REMOVE)
    private List<Imagen> imagen = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @OneToMany(mappedBy = "servicio", cascade = CascadeType.REMOVE)
    private List<Turno> turno = new ArrayList<>();

    @OneToMany(mappedBy = "servicio", cascade = CascadeType.REMOVE)
    private List<Atributo> atributo = new ArrayList<>();

    @OneToMany(mappedBy = "servicio", orphanRemoval = true)
    private Set<Stat> stats = new LinkedHashSet<>();

    //@ManyToMany
    //@JoinTable(name = "ubicacion_servicios", joinColumns = @JoinColumn(name = "servicios_id"), inverseJoinColumns = @JoinColumn(name = "ubicacion_id"))
    //private Set<Ubicacion> ubicaciones = new LinkedHashSet<>();

    @ManyToMany(mappedBy = "servicios")
    private Set<Ubicacion> ubicaciones = new LinkedHashSet<>();

    @ManyToOne
    @JoinColumn(name = "termino_id")
    private Termino termino;

}