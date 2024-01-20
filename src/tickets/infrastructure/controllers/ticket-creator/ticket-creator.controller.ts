import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TicketCreatorService } from '@/tickets/application';
import { CreateTicketDTO } from '@/tickets/domain/dtos/create-ticket.dto';

@ApiTags('Tickets')
@Controller('/tickets')
export class TicketCreatorController {
  constructor(private readonly ticketCreatorService: TicketCreatorService) {}
  @Post()
  async execute(@Body() createTicketDTO: CreateTicketDTO): Promise<void> {
    return this.ticketCreatorService.execute(createTicketDTO);
  }
}
