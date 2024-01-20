import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TicketFinderService } from '@/tickets/application';
import { PaginationParams } from '@/tickets/domain/dtos';
import { TicketModel } from '@/tickets/domain/models';

@ApiTags('Tickets')
@Controller('/tickets')
export class TicketFinderController {
  constructor(private readonly ticketFinderService: TicketFinderService) {}

  @Get()
  async execute(
    @Query() paginationParams: PaginationParams,
  ): Promise<TicketModel[]> {
    return this.ticketFinderService.execute(paginationParams);
  }
}
