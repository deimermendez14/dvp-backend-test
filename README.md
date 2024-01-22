# Technical backend test

This test was developed with nodeJS and nestJS . A brief description of the project and how it was structured is provided below.

This project follows the hexagonal architecture pattern (also known as "Ports and Adapters"). The hexagonal architecture encourages separation of concerns by organizing the code into layers that represent different application-oriented responsibilities towards the domain or business logic.

TypeORM was used as an object-relational mapper (ORM) to interact with the database. Please run the migrations.

The API documentation is generated and available through Swagger UI. You can access the documentation through localhost:${PORT}/docs


Finally, the application and database are containerized using Docker. The Docker file of the application follows the recommended practices of the following article: https://snyk.io/blog/choosing-the-best-node-js-docker-image/ . This makes it easy to deploy and run the project in different environments without worrying about system dependencies. To run the application, make sure you have Docker and Docker Compose installed, the environment variables configured and run the following command:

````bash
docker-compose up --build -d postgres pgadmin server-dev

docker exec -it server-dev /bin/sh

npm run migrations:run
