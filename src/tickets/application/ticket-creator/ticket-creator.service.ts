import { Inject, Injectable } from '@nestjs/common';

import { CreateTicketDTO } from '@/tickets/domain/dtos/create-ticket.dto';
import { TicketRepository } from '@/tickets/domain/repositories';

@Injectable()
export class TicketCreatorService {
  constructor(
    @Inject(TicketRepository)
    private readonly ticketRepository: TicketRepository,
  ) {}

  async execute(createTicketDTO: CreateTicketDTO): Promise<void> {
    return this.ticketRepository.create(createTicketDTO);
  }
}
