package Grupo8.Hairphoria.service;

import Grupo8.Hairphoria.Util.Utils;
import Grupo8.Hairphoria.entity.Usuario;
import Grupo8.Hairphoria.service.Interfaces.IMailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class MailService implements IMailService {

    private static final String HOST = "http://3.19.243.36:8080";
    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;
    @Value("${spring.mail.username}")
    private String MAIL;
    @Value("${email.expiration.minutes}")
    private String EXPIRATION_MINUTES;

    @Override
    public void send(Usuario usuario) {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper;

        try {

            helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
            helper.setFrom(MAIL);
            helper.setTo(usuario.getEmail());
            Context context = new Context();

            LocalDateTime expirationDate = LocalDateTime.now().plusMinutes(Long.parseLong(EXPIRATION_MINUTES));

            context.setVariable("nombre", usuario.getNombre());
            context.setVariable("apellido", usuario.getApellido());
            context.setVariable("link", String.format("%s/verify?code=%s-%s-%s", HOST,
                    Utils.generatorCode(),
                    Utils.encodeString(usuario.getId().toString()),
                    Utils.encodeString(expirationDate.toString())));

            String html = templateEngine.process("ValidationEmail", context);

            helper.setText(html, true);
            helper.setSubject("Validación de cuenta - Hairphoria");

            mailSender.send(message);

        } catch (
                MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
