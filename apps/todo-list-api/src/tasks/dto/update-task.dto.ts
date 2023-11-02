import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class UpdateTaskDto {
  @ApiProperty({
    type: 'string',
    description: 'The title to update the task',
  })
  @IsString({
    message: 'The task title must be a string',
  })
  @IsNotEmpty({
    message: 'The task title must have at least one character',
  })
  @IsOptional()
  readonly title?: string;

  @ApiProperty({
    type: 'boolean',
    description: 'The status to update the task',
  })
  @IsBoolean({
    message: 'The task status must be a boolean',
  })
  @IsOptional()
  readonly completed?: boolean;
}

export default UpdateTaskDto;
