import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default function (app: NestExpressApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Server Endpoints')
    .setDescription(
      'List of endpoints to connect to the server and retrieve information',
    )
    .setVersion(process.env.SWAGGER_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}
