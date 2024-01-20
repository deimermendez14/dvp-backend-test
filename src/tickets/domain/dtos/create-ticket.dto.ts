import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateTicketDTO {
  @IsNumber()
  @ApiProperty()
  userId: number;
}
