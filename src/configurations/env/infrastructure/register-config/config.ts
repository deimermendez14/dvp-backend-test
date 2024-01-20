import { registerAs } from '@nestjs/config';

import { RegisterConfiguration } from '../../domain/model/register-config.interface';

export default registerAs<RegisterConfiguration>('config', () => {
  return {
    project: {
      port: +process.env.PORT,
      swaggerVersion: process.env.SWAGGER_VERSION,
      isProduction: process.env.PRODUCTION === 'true',
    },
    database: {
      name: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: +process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
    },
    pgAdmin: {
      email: process.env.PGADMIN_EMAIL,
      password: process.env.PGADMIN_PASSWORD,
      port: +process.env.PGADMIN_PORT,
      portLocal: +process.env.PGADMIN_PORT_LOCAL,
    },
  };
});
