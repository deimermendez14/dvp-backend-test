import { Inject, Injectable } from '@nestjs/common';

import { UpdateTicketDTO } from '@/tickets/domain/dtos/update-ticket-dto';
import { TicketRepository } from '@/tickets/domain/repositories';

@Injectable()
export class TicketUpdaterService {
  constructor(
    @Inject(TicketRepository)
    private readonly ticketRepository: TicketRepository,
  ) {}

  async execute(id: number, updateTicketDto: UpdateTicketDTO): Promise<void> {
    return this.ticketRepository.update(id, updateTicketDto);
  }
}
