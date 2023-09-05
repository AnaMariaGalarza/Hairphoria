package Grupo8.Hairphoria.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Atributo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String atributo;

    @ManyToOne
    @JoinColumn(name = "servicio_id")
    private Servicio servicio;

}
