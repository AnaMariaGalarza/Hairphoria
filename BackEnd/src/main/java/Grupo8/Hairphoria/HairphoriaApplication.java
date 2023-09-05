package Grupo8.Hairphoria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class HairphoriaApplication {

    public static void main(String[] args) {
        SpringApplication.run(HairphoriaApplication.class, args);
    }

}