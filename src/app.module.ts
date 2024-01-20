import { Module } from '@nestjs/common';

import { DatabaseModule } from './configurations/database/database.module';
import { EnvConfigurationModule } from './configurations/env/env.module';
import { TicketModule } from './tickets/ticket.module';

@Module({
  imports: [EnvConfigurationModule, DatabaseModule, TicketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
