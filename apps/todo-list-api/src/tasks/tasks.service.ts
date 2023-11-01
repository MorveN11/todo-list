import { Injectable } from '@nestjs/common';

import PrismaService from '@/prisma/prisma.service';

import CreateTaskDto from './dto/create-task.dto';
import UpdateTaskDto from './dto/update-task.dto';

@Injectable()
export default class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  create(_createTaskDto: CreateTaskDto) {}

  findAll() {
    return 'This action returns all tasks';
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, _updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
