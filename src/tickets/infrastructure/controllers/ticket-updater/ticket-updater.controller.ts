import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TicketUpdaterService } from '@/tickets/application';
import { UpdateTicketDTO } from '@/tickets/domain/dtos/update-ticket-dto';

@ApiTags('Tickets')
@Controller('/tickets')
export class TicketUpdaterController {
  constructor(private readonly ticketUpdaterService: TicketUpdaterService) {}

  @Patch(':id')
  async execute(
    @Param('id') id: number,
    @Body() updateTicketDto: UpdateTicketDTO,
  ): Promise<void> {
    return this.ticketUpdaterService.execute(id, updateTicketDto);
  }
}
