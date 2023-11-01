import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import CreateTaskDto from './dto/create-task.dto';
import UpdateTaskDto from './dto/update-task.dto';
import Task from './entities/task.entity';
import TasksService from './tasks.service';

@Controller('tasks')
@ApiTags('Tasks')
export default class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiCreatedResponse({ type: Task })
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiCreatedResponse({ type: [Task] })
  async findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: Task })
  async findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: Task })
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: Task })
  async remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
