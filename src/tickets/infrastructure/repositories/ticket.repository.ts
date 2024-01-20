import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TicketEntity } from '../entities';
import { TicketMapper } from '../mappers/ticket.mapper';
import { PaginationParams } from '@/tickets/domain/dtos';
import { CreateTicketDTO } from '@/tickets/domain/dtos/create-ticket.dto';
import { UpdateTicketDTO } from '@/tickets/domain/dtos/update-ticket-dto';
import { TicketModel } from '@/tickets/domain/models';
import { TicketRepository } from '@/tickets/domain/repositories';

export class TicketRepositoryImpl implements TicketRepository {
  constructor(
    @InjectRepository(TicketEntity)
    private readonly repository: Repository<TicketEntity>,
    private readonly mapper: TicketMapper,
  ) {}
  async create(createTicketDTO: CreateTicketDTO): Promise<void> {
    await this.repository.save(createTicketDTO);
  }
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
  async findAll(paginationParams: PaginationParams): Promise<TicketModel[]> {
    console.log(paginationParams)
    return this.mapper.entitiesToModels(
      await this.repository.find({
        take: paginationParams.limit,
        skip: paginationParams.offset,
      }),
    );
  }
  async findById(id: number): Promise<TicketModel> {
    return this.mapper.entityToModel(
      await this.repository.findOne({ where: { id } }),
    );
  }
  async update(id: number, { status, userId }: UpdateTicketDTO): Promise<void> {
    await this.repository.update(id, {
      status,
      user: { id: userId },
    });
  }
}
