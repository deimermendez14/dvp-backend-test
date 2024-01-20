import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class UpdateTicketDTO {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  userId: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  status: boolean;
}
