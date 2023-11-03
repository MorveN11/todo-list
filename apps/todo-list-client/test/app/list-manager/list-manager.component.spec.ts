import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListManagerComponent } from '@/list-manager/list-manager.component';
import { Task } from '@/modules/task/entities/task.entity';
import { TaskService } from '@/modules/task/services/task.service';
import { TodoItemComponent } from '@/todo-item/todo-item.component';

describe('ListManagerComponent', () => {
  let component: ListManagerComponent;
  let fixture: ComponentFixture<ListManagerComponent>;
  let taskService: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListManagerComponent, TodoItemComponent],
      imports: [HttpClientModule],
      providers: [TaskService],
    });

    fixture = TestBed.createComponent(ListManagerComponent);
    component = fixture.componentInstance;

    taskService = TestBed.inject(TaskService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize todoList from TaskService', () => {
    const mockTasks: Task[] = [
      {
        id: '1',
        title: 'Task 1',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    jest.spyOn(taskService, 'getTasks').mockReturnValue(of(mockTasks));

    component.ngOnInit();

    expect(component.todoList).toEqual(mockTasks);
  });

  it('onDeleteTask should delete a task and update todoList', () => {
    const mockTasks: Task[] = [
      {
        id: '1',
        title: 'Task 1',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        title: 'Task 2',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(taskService, 'deleteTask').mockReturnValue(of(mockTasks[0]));
    jest.spyOn(taskService, 'getTasks').mockReturnValue(of([mockTasks[1]]));

    component.todoList = mockTasks;
    component.onDeleteTask('1');

    expect(component.todoList.length).toBe(1);
    expect(component.todoList[0].id).toBe('2');
  });

  it('onUpdateTask should update a task and update todoList', () => {
    const mockTasks: Task[] = [
      {
        id: '1',
        title: 'Task 1',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        title: 'Task 2',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const updatedTask: Task = {
      id: '1',
      title: 'Task 1 Updated',
      completed: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(taskService, 'updateTask').mockReturnValue(of(updatedTask));

    component.todoList = mockTasks;
    component.onUpdateTask(updatedTask);

    expect(component.todoList.length).toBe(2);
    expect(component.todoList[0].title).toBe('Task 1 Updated');
    expect(component.todoList[0].completed).toBe(true);
  });

  it('onToggleTask should toggle a task and update todoList', () => {
    const mockTasks: Task[] = [
      {
        id: '1',
        title: 'Task 1',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        title: 'Task 2',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const toggledTask: Task = {
      id: '1',
      title: 'Task 1',
      completed: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(taskService, 'updateTask').mockReturnValue(of(toggledTask));

    component.todoList = mockTasks;
    component.onToggleTask(toggledTask);

    expect(component.todoList.length).toBe(2);
    expect(component.todoList[0].completed).toBe(true);
  });
});
