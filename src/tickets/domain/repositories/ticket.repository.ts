import { PaginationParams } from '../dtos';
import { CreateTicketDTO } from '../dtos/create-ticket.dto';
import { UpdateTicketDTO } from '../dtos/update-ticket-dto';
import { TicketModel } from '../models';

export interface TicketRepository {
  create(createTicketDTO: CreateTicketDTO): Promise<void>;

  delete(id: number): Promise<void>;

  findAll(paginationParams: PaginationParams): Promise<TicketModel[]>;

  findById(id: number): Promise<TicketModel>;

  update(id: number, updateTicketDto: UpdateTicketDTO): Promise<void>;
}

export const TicketRepository = Symbol('TicketRepository');
