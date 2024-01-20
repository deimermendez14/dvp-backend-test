import { Inject, Injectable } from '@nestjs/common';

import { TicketModel } from '@/tickets/domain/models';
import { TicketRepository } from '@/tickets/domain/repositories';

@Injectable()
export class TicketFinderByIdService {
  constructor(
    @Inject(TicketRepository)
    private readonly ticketRepository: TicketRepository,
  ) {}

  async execute(id: number): Promise<TicketModel> {
    return this.ticketRepository.findById(id);
  }
}
