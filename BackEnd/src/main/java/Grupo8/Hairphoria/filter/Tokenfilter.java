package Grupo8.Hairphoria.filter;

import Grupo8.Hairphoria.dto.Error.ErrorResponse;
import Grupo8.Hairphoria.service.TokenBlacklistService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Order(1)
@Component
@RequiredArgsConstructor
public class Tokenfilter implements Filter {

    private final TokenBlacklistService tokenBlacklistService;
    private final ObjectMapper mapper;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;
        String token = req.getHeader("Authorization");

        if (token != null && tokenBlacklistService.contains(token)) {
            ErrorResponse error = new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), "Este token es inválido, por favor inicia sesión nuevamente");
            res.addHeader("content-type", "application/json");
            res.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            res.getWriter().write(mapper.writeValueAsString(error));
            return;
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }
}
