package com.rutaclara.backend.web;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        Dotenv dotenv = Dotenv.load();
        String clientUrl = dotenv.get("CLIENT_URL");

        registry.addMapping("/**")
                .allowedOrigins(clientUrl, "http://localhost:3000", "https://rutaclarasocialnetwork-production-5f1d.up.railway.app") // Agrega el origen problemático a la lista de orígenes permitidos.
                .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD") // Permite estos métodos.
                .allowedHeaders("*") // Permite todos los encabezados en las solicitudes.
                .exposedHeaders("*") // Expone todos los encabezados en las respuestas.
                .allowCredentials(true);
    }
}