package Grupo8.Hairphoria.Util;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.util.Base64;
import java.util.Collection;
import java.util.Collections;
import java.util.UUID;
import java.util.stream.Stream;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Utils {

    public static String generatorCode() {
        return UUID.randomUUID().toString().replaceAll("-", "").substring(0, 6);
    }

    public static String encodeString(String string) {
        return Base64.getEncoder().encodeToString(string.getBytes());
    }

    public static String decodeString(String string) {
        return new String(Base64.getDecoder().decode(string));
    }

}
