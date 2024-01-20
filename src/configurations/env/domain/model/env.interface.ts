export interface Env {
  // project configurations
  PORT: number;
  SWAGGER_VERSION: string;
  PRODUCTION: boolean;

  // postgres credentials
  DATABASE_NAME: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_PORT: number;
  DATABASE_HOST: string;
  // pgAdmin
  PGADMIN_EMAIL: string;
  PGADMIN_PASSWORD: string;
  PGADMIN_PORT: number;
  PGADMIN_PORT_LOCAL: number;
}
