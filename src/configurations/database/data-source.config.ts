import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: [__dirname + '/migrations/v1/**.ts'],
  namingStrategy: new SnakeNamingStrategy(),
  logging: 'all',
};
const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
