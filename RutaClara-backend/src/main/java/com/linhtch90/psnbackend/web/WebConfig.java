package com.linhtch90.psnbackend.web;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        Dotenv dotenv = Dotenv.load();
        String clientUrl = dotenv.get("CLIENT_URL");

        registry.addMapping("/**")
                .allowedOrigins(clientUrl,"http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD") // Permite estos métodos.
                .allowCredentials(true);
    }
}
