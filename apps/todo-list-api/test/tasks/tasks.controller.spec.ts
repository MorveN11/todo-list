import { Test, TestingModule } from '@nestjs/testing';

import PrismaService from '@/prisma/prisma.service';
import CreateTaskDto from '@/tasks/dto/create-task.dto';
import UpdateTaskDto from '@/tasks/dto/update-task.dto';
import TasksController from '@/tasks/tasks.controller';
import TasksService from '@/tasks/tasks.service';

describe('TasksController', () => {
  let createMock: jest.Mock;
  let findManyMock: jest.Mock;
  let findUniqueMock: jest.Mock;
  let updateMock: jest.Mock;
  let deleteMock: jest.Mock;
  let tasksController: TasksController;

  beforeEach(async () => {
    createMock = jest.fn();
    findManyMock = jest.fn();
    findUniqueMock = jest.fn();
    updateMock = jest.fn();
    deleteMock = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
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

    tasksController = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(tasksController).toBeDefined();
  });

  it('should create a task', async () => {
    const task: CreateTaskDto = {
      title: 'Mi primera Tarea',
    };
    createMock.mockReturnValue(task);

    const result = await tasksController.create(task);
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

    const result = await tasksController.findAll();
    expect(result.length).toBe(2);
  });

  it('should find one task', async () => {
    const task: CreateTaskDto = {
      title: 'Mi primera tarea',
    };
    findUniqueMock.mockReturnValue(task);

    const result = await tasksController.findOne('5641ca92-bc3e-4679-9ae4-e861b344375c');
    expect(result.title).toBe('Mi primera tarea');
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

    const result = await tasksController.update('b9b3e8cf-5e0c-40e7-89de-c4b63d083473', updatedTask);
    expect(result.title).toBe('Mi tarea actualizada');
  });

  it('should delete a task', async () => {
    const task: CreateTaskDto = {
      title: 'Mi primera tarea',
    };
    deleteMock.mockReturnValue(task);

    const result = await tasksController.remove('5641ca92-bc3e-4679-9ae4-e861b344375c');
    expect(result.title).toBe('Mi primera tarea');
  });
});
