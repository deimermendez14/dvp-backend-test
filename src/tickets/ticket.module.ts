import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  TicketCreatorController,
  TicketDeleterController,
  TicketFinderByIdController,
  TicketFinderController,
  TicketUpdaterController,
} from './infrastructure/controllers';
import { TicketEntity, UserEntity } from './infrastructure/entities';
import { TicketMapper } from './infrastructure/mappers/ticket.mapper';
import { TicketRepositoryImpl } from './infrastructure/repositories/ticket.repository';
import {
  TicketCreatorService,
  TicketDeleterService,
  TicketFinderByIdService,
  TicketFinderService,
  TicketUpdaterService,
} from './application';
import { TicketRepository } from './domain/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([TicketEntity, UserEntity])],
  controllers: [
    TicketCreatorController,
    TicketDeleterController,
    TicketFinderByIdController,
    TicketFinderController,
    TicketUpdaterController,
  ],
  providers: [
    TicketCreatorService,
    TicketDeleterService,
    TicketFinderByIdService,
    TicketFinderService,
    TicketUpdaterService,
    { provide: TicketRepository, useClass: TicketRepositoryImpl },
    TicketMapper,
  ],
})
export class TicketModule {}
