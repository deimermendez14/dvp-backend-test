# Prueba tecnica backend

Esta prueba  fue desarrollada con nodeJS y nestJS . A continuación, se proporciona una breve descripción del proyecto y cómo se estructuró.

Este proyecto sigue el patrón de arquitectura hexagonal (también conocido como "Puertos y Adaptadores"). La arquitectura hexagonal fomenta la separación de las preocupaciones al organizar el código en capas que representan diferentes responsabilidades orientado la aplicacion hacia el dominio o logica de negocio.

Se utilizó TypeORM como mapeador objeto-relacional (ORM) para interactuar con la base de datos.

La documentación de la API está generada y disponible a través de Swagger UI. Puedes acceder a la documentación atraves de localhost:${PORT}/docs


Por ultimo decir que la aplicacion y la base de datos están contenerizadas utilizando Docker. El Docker file de la aplicacion sigue las practicas recomendadas del siguiente articulo: https://snyk.io/blog/choosing-the-best-node-js-docker-image/  . Esto facilita la implementación y la ejecución del proyecto en diferentes entornos sin preocuparse por las dependencias del sistema. Para ejecutar la aplicación, asegúrate de tener Docker y Docker Compose instalados, la variables de entorno configuradas y ejecuta el siguiente comando:

```bash
docker-compose up --build -d postgres pgadmin server-dev
