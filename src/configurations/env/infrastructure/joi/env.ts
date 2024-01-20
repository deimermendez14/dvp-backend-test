import * as Joi from 'joi';

import { Env } from '../../domain/model/env.interface';

export const validationSchema = Joi.object<Env>({
  // project configurations
  PORT: Joi.number().required(),
  SWAGGER_VERSION: Joi.string().required(),
  PRODUCTION: Joi.boolean().required(),

  // postgres credentials
  DATABASE_NAME: Joi.string().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_HOST: Joi.string().required(),
  //  pgAdmin
  PGADMIN_EMAIL: Joi.string().required(),
  PGADMIN_PASSWORD: Joi.string().required(),
  PGADMIN_PORT: Joi.number().required(),
  PGADMIN_PORT_LOCAL: Joi.number().required(),
});
