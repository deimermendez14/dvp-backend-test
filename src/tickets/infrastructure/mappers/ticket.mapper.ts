import { TicketEntity } from '../entities';
import { TicketModelBuilder } from '@/tickets/domain/builders/ticket.builder';
import { TicketModel } from '@/tickets/domain/models';

export class TicketMapper {
  entityToModel({
    createdAt,
    id,
    status,
    updatedAt,
    userId,
  }: TicketEntity): TicketModel {
    return new TicketModelBuilder()
      .withId(id)
      .withUserId(userId)
      .withStatus(status)
      .withCreatedAt(createdAt)
      .withUpdatedAt(updatedAt)
      .build();
  }

  entitiesToModels(ticketEntities: TicketEntity[]): TicketModel[] {
    return ticketEntities.map((entity) => this.entityToModel(entity));
  }
}
