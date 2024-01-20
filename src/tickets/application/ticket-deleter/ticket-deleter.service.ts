import { Inject, Injectable } from '@nestjs/common';

import { TicketRepository } from '@/tickets/domain/repositories';

@Injectable()
export class TicketDeleterService {
  constructor(
    @Inject(TicketRepository)
    private readonly ticketRepository: TicketRepository,
  ) {}

  async execute(id: number): Promise<void> {
    return this.ticketRepository.delete(id);
  }
}
