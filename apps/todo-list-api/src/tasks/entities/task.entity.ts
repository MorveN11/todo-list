import { ApiProperty } from '@nestjs/swagger';

class Task {
  @ApiProperty({
    type: 'string',
    format: 'uuid',
    description: 'The unique identifier of the task',
  })
  id: string;

  @ApiProperty({
    type: 'string',
    description: 'The title of the task',
  })
  title: string;

  @ApiProperty({
    type: 'boolean',
    description: 'The status of the task',
  })
  completed: boolean;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    description: 'The date and time the task was created',
  })
  createdAt: Date;

  @ApiProperty({
    type: 'string',
    format: 'date-time',
    description: 'The date and time the task was updated',
  })
  updatedAt: Date;
}

export default Task;
