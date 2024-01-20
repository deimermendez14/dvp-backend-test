import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../env/infrastructure/register-config/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, name, password, port, user } = configService.database;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: name,
          autoLoadEntities: true,
          extra: {
            trustServerCertificate: true,
          },
        };
      },
    }),
  ],
  exports: [TypeOrmModule], // 👈 add in exports
})
export class DatabaseModule {}
