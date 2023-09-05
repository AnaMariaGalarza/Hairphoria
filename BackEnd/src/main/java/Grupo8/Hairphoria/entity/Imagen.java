package Grupo8.Hairphoria.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "imagen")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 6000)
    private String imagen;

    @ManyToOne
    @JoinColumn(name = "servicio_id")
    private Servicio servicio;
}
