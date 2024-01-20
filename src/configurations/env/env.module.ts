import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validationSchema } from './infrastructure/joi/env';
import config from './infrastructure/register-config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      validationSchema,
    }),
  ],
})
export class EnvConfigurationModule {}
