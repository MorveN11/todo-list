import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export default class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  readonly completed?: boolean;
}
