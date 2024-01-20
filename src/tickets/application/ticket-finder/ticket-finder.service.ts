import { Inject, Injectable } from '@nestjs/common';

import { PaginationParams } from '@/tickets/domain/dtos';
import { TicketModel } from '@/tickets/domain/models';
import { TicketRepository } from '@/tickets/domain/repositories';

@Injectable()
export class TicketFinderService {
  constructor(
    @Inject(TicketRepository)
    private readonly ticketRepository: TicketRepository,
  ) {}

  async execute(paginationParams: PaginationParams): Promise<TicketModel[]> {
    return this.ticketRepository.findAll(paginationParams);
  }
}
