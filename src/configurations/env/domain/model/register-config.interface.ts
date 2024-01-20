export interface RegisterConfiguration {
  project: {
    port: number;
    swaggerVersion: string;
    isProduction: boolean;
  };
  database: {
    name: string;
    user: string;
    password: string;
    port: number;
    host: string;
  };
  pgAdmin: {
    email: string;
    password: string;
    port: number;
    portLocal: number;
  };
}
