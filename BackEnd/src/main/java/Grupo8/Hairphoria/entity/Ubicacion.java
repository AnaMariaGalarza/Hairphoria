package Grupo8.Hairphoria.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.geo.Point;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "ubicacion")
public class Ubicacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String ciudad;
    private Point coordenadas;

    @ManyToMany
    @JoinTable(name = "ubicacion_servicios", joinColumns = @JoinColumn(name = "ubicacion_id"), inverseJoinColumns = @JoinColumn(name = "servicios_id"))
    private Set<Servicio> servicios = new LinkedHashSet<>();

    //@ManyToMany(mappedBy = "ubicaciones")
    //private Set<Servicio> servicios = new LinkedHashSet<>();



}
