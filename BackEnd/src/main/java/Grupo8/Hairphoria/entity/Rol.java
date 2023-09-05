package Grupo8.Hairphoria.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "roles")
public class Rol implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "rol")
    @Enumerated(EnumType.STRING)
    private UsuarioRol usuarioRol;

    @Override
    public String getAuthority() {
        return usuarioRol.name();
    }
}
