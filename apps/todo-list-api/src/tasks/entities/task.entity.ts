import { ApiProperty } from '@nestjs/swagger';

export default class Task {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  completed: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
