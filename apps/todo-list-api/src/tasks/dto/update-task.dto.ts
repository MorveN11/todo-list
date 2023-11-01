import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class UpdateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly title?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  readonly completed?: boolean;
}
