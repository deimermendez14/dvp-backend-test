import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TicketFinderByIdService } from '@/tickets/application';
import { TicketModel } from '@/tickets/domain/models';

@ApiTags('Tickets')
@Controller('/tickets')
export class TicketFinderByIdController {
  constructor(
    private readonly ticketFinderByIdService: TicketFinderByIdService,
  ) {}

  @Get(':id')
  async execute(@Param('id') id: number): Promise<TicketModel> {
    return this.ticketFinderByIdService.execute(id);
  }
}
