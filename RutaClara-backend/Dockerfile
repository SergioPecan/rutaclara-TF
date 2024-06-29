
FROM openjdk:17-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
# Copia el archivo .env al directorio de trabajo actual
COPY .env ./
ENTRYPOINT ["java","-jar","/app.jar"]