package Grupo8.Hairphoria.controller;

import Grupo8.Hairphoria.dto.Auth.AuthRequest;
import Grupo8.Hairphoria.dto.Auth.AuthResponse;
import Grupo8.Hairphoria.dto.Auth.EmailRequest;
import Grupo8.Hairphoria.dto.Auth.ValidateMessageResponse;
import Grupo8.Hairphoria.service.Interfaces.IAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final IAuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(this.authService.login(request));
    }

    @GetMapping("/verify")
    public ResponseEntity<ValidateMessageResponse> verify(@RequestParam String code, HttpServletResponse response) {
        return ResponseEntity.ok(this.authService.validateUser(code, response));
    }

    @PostMapping("/resend-email")
    public ResponseEntity<ValidateMessageResponse> resendEmail(@RequestBody EmailRequest email) {
        return ResponseEntity.ok(this.authService.resendEmail(email));
    }

    @PostMapping("/logout")
    public ResponseEntity<ValidateMessageResponse> logout(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(this.authService.logout(token));
    }
}
