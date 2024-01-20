import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TicketDeleterService } from '@/tickets/application';

@ApiTags('Tickets')
@Controller('/tickets')
export class TicketDeleterController {
  constructor(private readonly ticketDeleterService: TicketDeleterService) {}

  @Delete(':id')
  async execute(@Param('id') id: number): Promise<void> {
    return this.ticketDeleterService.execute(id);
  }
}
