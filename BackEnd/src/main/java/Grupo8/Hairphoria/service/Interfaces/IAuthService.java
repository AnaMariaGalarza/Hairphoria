package Grupo8.Hairphoria.service.Interfaces;

import Grupo8.Hairphoria.dto.Auth.AuthRequest;
import Grupo8.Hairphoria.dto.Auth.AuthResponse;
import Grupo8.Hairphoria.dto.Auth.EmailRequest;
import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;

import javax.servlet.http.HttpServletResponse;

public interface IAuthService {
    AuthResponse login(AuthRequest authRequest);

    ValidateMessageResponse validateUser(String code, HttpServletResponse response);

    ValidateMessageResponse resendEmail(EmailRequest email);

    ValidateMessageResponse logout(String token);
}
