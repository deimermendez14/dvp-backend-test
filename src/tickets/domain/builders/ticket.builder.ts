import { TicketModel } from '../models';

export class TicketModelBuilder {
  private id: number;
  private userId: number;
  private status: boolean;
  private createdAt: Date;
  private updatedAt: Date;

  withId(id: number): this {
    this.id = id;
    return this;
  }

  withUserId(userId: number): this {
    this.userId = userId;
    return this;
  }

  withStatus(status: boolean): this {
    this.status = status;
    return this;
  }

  withCreatedAt(createdAt: Date): this {
    this.createdAt = createdAt;
    return this;
  }

  withUpdatedAt(updatedAt: Date): this {
    this.updatedAt = updatedAt;
    return this;
  }

  build(): TicketModel {
    return TicketModel.build({
      id: this.id,
      userId: this.userId,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    });
  }
}
