package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.Util.Utils;
import Grupo8.Hairphoria.dto.Auth.AuthRequest;
import Grupo8.Hairphoria.dto.Auth.AuthResponse;
import Grupo8.Hairphoria.dto.Auth.EmailRequest;
import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;
import Grupo8.Hairphoria.entity.Usuario;
import Grupo8.Hairphoria.exceptions.BadRequestException;
import Grupo8.Hairphoria.exceptions.UnauthorizedException;
import Grupo8.Hairphoria.repository.IUsuarioRepository;
import Grupo8.Hairphoria.service.Interfaces.IAuthService;
import Grupo8.Hairphoria.service.Interfaces.IMailService;
import Grupo8.Hairphoria.service.Interfaces.ITokenBlacklistService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthService implements IAuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtEncoder jwtEncoder;
    private final IUsuarioRepository usuarioRepository;
    private final IMailService mailService;

    private final ITokenBlacklistService tokenBlacklistService;

    @Value("${jwt.expiration}")
    private Long expiration;

    @Override
    public AuthResponse login(AuthRequest authRequest) {
        try {
            usuarioRepository.findByEmail(authRequest.email()).orElseThrow(() -> new BadCredentialsException("El email no existe en la base de datos, reintentelo con un correo valido"));
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.email(), authRequest.password()));
            Usuario usuario = (Usuario) authentication.getPrincipal();
            Instant now = Instant.now();
            String scope = authentication.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.joining(", "));

            JwtClaimsSet claims = JwtClaimsSet.builder()
                    .issuer("com.lof.correodemo")
                    .issuedAt(now)
                    .expiresAt(now.plusSeconds(expiration))
                    .subject(usuario.getId().toString())
                    .claims((claim) -> {
                        claim.put("scope", scope);
                        claim.put("email", usuario.getUsername());
                        claim.put("nombre", usuario.getNombre());
                        claim.put("apellido", usuario.getApellido());
                        claim.put("authorities", usuario.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList());
                        claim.put("roles", scope);
                    })
                    .build();
            return new AuthResponse(this.jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue());
        } catch (BadCredentialsException e) {
            throw new UnauthorizedException(e.getMessage().toLowerCase());
        } catch (IllegalArgumentException exception) {
            throw new UnauthorizedException("Credenciales invalidas");
        }
    }

    @Override
    public ValidateMessageResponse validateUser(String code, HttpServletResponse response) {
        try {
            response.setStatus(HttpStatus.FOUND.value());
            if (!code.contains("-")) {
                throw new UnauthorizedException("Codigo invalido");
            }

            String[] parts = code.split("-");
            String idCode = parts[1];
            String dateCode = parts[2];

            long id = Long.parseLong(Utils.decodeString(idCode));
            LocalDateTime date = LocalDateTime.parse(Utils.decodeString(dateCode));

            if (LocalDateTime.now().isAfter(date)) {
                response.sendRedirect("http://s3-hairphoria-front.s3-website.us-east-2.amazonaws.com/registerconfirmdisable");
                throw new UnauthorizedException("Codigo vencido, solicite uno nuevo");
            }

            Usuario usuario = usuarioRepository.findById(id).orElseThrow(() -> new UnauthorizedException("El usuario que deseas verificar no se encuentra registrado"));

            if (usuario.isEnabled()) {
                response.sendRedirect("http://s3-hairphoria-front.s3-website.us-east-2.amazonaws.com/registerconfirm");
                throw new BadRequestException("Usuario ya validado");
            }

            usuario.setEnabled(true);

            usuarioRepository.save(usuario);

            response.sendRedirect("http://s3-hairphoria-front.s3-website.us-east-2.amazonaws.com/registerconfirm");
        } catch (IOException e) {
            throw new RuntimeException("Error al redirecionar a frontend");
        }

        return new ValidateMessageResponse("Usuario validado, ya puede iniciar sesión");

    }

    public ValidateMessageResponse resendEmail(EmailRequest email) {
        Usuario usuario = usuarioRepository.findByEmail(email.email()).orElseThrow(() -> new UnauthorizedException("Usuario no encontrado"));
        if (usuario.isEnabled()) {
            throw new UnauthorizedException("Usuario ya validado");
        }

        mailService.send(usuario);
        return new ValidateMessageResponse("Codigo reenviado, verifique su correo");
    }

    @Override
    public ValidateMessageResponse logout(String token) {
        if (tokenBlacklistService.contains(token)) {
            return new ValidateMessageResponse("Este token ya fue invalidado");
        } else {
            tokenBlacklistService.add(token);
            return new ValidateMessageResponse("Sesión cerrada correctamente, vuelva pronto");
        }
    }
}

