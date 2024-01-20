export class TicketModel {
  private constructor(
    private readonly id: number,
    private readonly userId: number,
    private readonly status: boolean,
    private readonly createdAt: Date,
    private readonly updatedAt: Date,
  ) {}

  getId(): number {
    return this.id;
  }

  getUserId(): number {
    return this.userId;
  }

  getStatus(): boolean {
    return this.status;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  static build({
    id,
    userId,
    status,
    createdAt,
    updatedAt,
  }: {
    id: number;
    userId: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
  }): TicketModel {
    return new TicketModel(id, userId, status, createdAt, updatedAt);
  }
}
