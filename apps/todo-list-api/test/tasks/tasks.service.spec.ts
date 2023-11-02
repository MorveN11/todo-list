import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import PrismaService from '@/prisma/prisma.service';
import CreateTaskDto from '@/tasks/dto/create-task.dto';
import UpdateTaskDto from '@/tasks/dto/update-task.dto';
import TasksService from '@/tasks/tasks.service';

describe('TasksService', () => {
  let createMock: jest.Mock;
  let findManyMock: jest.Mock;
  let findUniqueMock: jest.Mock;
  let updateMock: jest.Mock;
  let deleteMock: jest.Mock;
  let tasksService: TasksService;

  beforeEach(async () => {
    createMock = jest.fn();
    findManyMock = jest.fn();
    findUniqueMock = jest.fn();
    updateMock = jest.fn();
    deleteMock = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: PrismaService,
          useValue: {
            task: {
              create: createMock,
              findMany: findManyMock,
              findUnique: findUniqueMock,
              update: updateMock,
              delete: deleteMock,
            },
          },
        },
      ],
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(tasksService).toBeDefined();
  });

  it('should create a task', async () => {
    const task: CreateTaskDto = {
      title: 'Mi primera Tarea',
    };
    createMock.mockReturnValue(task);

    const result = await tasksService.create(task);
    expect(result.title).toBe('Mi primera Tarea');
  });

  it('should find all tasks', async () => {
    const task1: CreateTaskDto = {
      title: 'Mi primera Tarea',
    };
    const task2: CreateTaskDto = {
      title: 'Mi segunda Tarea',
    };
    findManyMock.mockReturnValue([task1, task2]);

    const result = await tasksService.findAll();
    expect(result.length).toBe(2);
  });

  it('should find one task', async () => {
    const task: CreateTaskDto = {
      title: 'Mi primera tarea',
    };
    findUniqueMock.mockReturnValue(task);

    const result = await tasksService.findOne('5641ca92-bc3e-4679-9ae4-e861b344375c');
    expect(result.title).toBe('Mi primera tarea');

    let error;
    findUniqueMock.mockImplementation(() => {
      throw new NotFoundException('Task with ID 5641ca92-bc3e-4679-9ae4-e861b344375c not found');
    });

    try {
      await tasksService.findOne('5641ca92-bc3e-4679-9ae4-e861b344375c');
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(NotFoundException);
    expect(error.message).toBe('Task with ID 5641ca92-bc3e-4679-9ae4-e861b344375c not found');
  });

  it('should update a task', async () => {
    const task: CreateTaskDto = {
      title: 'Mi primera tarea',
    };

    const updatedTask: UpdateTaskDto = {
      title: 'Mi tarea actualizada',
      completed: true,
    };
    updateMock.mockReturnValue(task);
    updateMock.mockReturnValue({ ...task, ...updatedTask });

    const result = await tasksService.update('b9b3e8cf-5e0c-40e7-89de-c4b63d083473', updatedTask);
    expect(result.title).toBe('Mi tarea actualizada');

    let error;
    updateMock.mockImplementation(() => {
      throw new NotFoundException('Task with ID 3fa85f64-5717-4562-b3fc-2c963f66afa6 not found');
    });

    try {
      await tasksService.update('3fa85f64-5717-4562-b3fc-2c963f66afa6', updatedTask);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(NotFoundException);
    expect(error.message).toBe('Task with ID 3fa85f64-5717-4562-b3fc-2c963f66afa6 not found');
  });

  it('should delete a task', async () => {
    const task: CreateTaskDto = {
      title: 'Mi primera tarea',
    };
    deleteMock.mockReturnValue(task);

    const result = await tasksService.remove('5641ca92-bc3e-4679-9ae4-e861b344375c');
    expect(result.title).toBe('Mi primera tarea');

    let error;
    deleteMock.mockImplementation(() => {
      throw new NotFoundException('Task with ID bd1b7ecb-0f68-4881-8263-fc5608e89e68 not found');
    });

    try {
      await tasksService.remove('bd1b7ecb-0f68-4881-8263-fc5608e89e68');
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(NotFoundException);
    expect(error.message).toBe('Task with ID bd1b7ecb-0f68-4881-8263-fc5608e89e68 not found');
  });
});
