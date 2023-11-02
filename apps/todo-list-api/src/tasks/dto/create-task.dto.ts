import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateTaskDto {
  @ApiProperty({
    type: 'string',
    description: 'The title of the Task',
  })
  @IsString({
    message: 'The task title must be a string',
  })
  @IsNotEmpty({
    message: 'The task title must have at least one character',
  })
  readonly title: string;

  @ApiProperty({
    type: 'boolean',
    description: 'The status of the Task',
  })
  @IsBoolean({
    message: 'The task status must be a boolean',
  })
  @IsOptional()
  readonly completed?: boolean;
}

export default CreateTaskDto;
