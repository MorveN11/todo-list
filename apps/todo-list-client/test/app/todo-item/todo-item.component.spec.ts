import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CheckBoxButtonComponent } from '@/check-box-button/check-box-button.component';
import { DeleteButtonComponent } from '@/delete-button/delete-button.component';
import { EditButtonComponent } from '@/edit-button/edit-button.component';
import { TaskService } from '@/modules/task/services/task.service';
import { TodoItemComponent } from '@/todo-item/todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let taskService: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemComponent, EditButtonComponent, DeleteButtonComponent, CheckBoxButtonComponent],
      imports: [HttpClientModule],
      providers: [TaskService],
    });

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;

    taskService = TestBed.inject(TaskService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onDeleteClick should emit deleteClicked with task id', () => {
    const deleteClickedSpy = jest.spyOn(component.deleteClicked, 'emit');
    const task = { id: '1', title: 'Test Task', completed: false, createdAt: new Date(), updatedAt: new Date() };
    component.todo = task;
    component.onDeleteClick();
    expect(deleteClickedSpy).toHaveBeenCalledWith('1');
  });

  it('startEditing should set isEditing to true and initialize editedTitle', () => {
    const task = { id: '1', title: 'Test Task', completed: false, createdAt: new Date(), updatedAt: new Date() };
    component.todo = task;
    component.startEditing();
    expect(component.isEditing).toBe(true);
    expect(component.editedTitle).toBe('Test Task');
  });

  it('saveTitle should update task title and emit titleChanged when title is changed', () => {
    const titleChangedSpy = jest.spyOn(component.titleChanged, 'emit');
    const task = { id: '1', title: 'Test Task', completed: false, createdAt: new Date(), updatedAt: new Date() };
    component.todo = task;
    component.editedTitle = 'Updated Task';
    const updatedTask = { ...task, title: 'Updated Task' };
    jest.spyOn(taskService, 'updateTask').mockReturnValue(of(updatedTask));
    component.saveTitle();
    expect(component.isEditing).toBe(false);
    expect(component.todo.title).toBe('Updated Task');
    expect(titleChangedSpy).toHaveBeenCalledWith('Updated Task');
  });

  it('saveTitle should not update task title or emit titleChanged when title is not changed', () => {
    const titleChangedSpy = jest.spyOn(component.titleChanged, 'emit');
    const task = { id: '1', title: 'Test Task', completed: false, createdAt: new Date(), updatedAt: new Date() };
    component.todo = task;
    component.editedTitle = 'Test Task';
    component.saveTitle();
    expect(component.isEditing).toBe(false);
    expect(component.todo.title).toBe('Test Task');
    expect(titleChangedSpy).not.toHaveBeenCalled();
  });

  it('onUpdateClick should emit updateClicked with task', () => {
    const updateClickedSpy = jest.spyOn(component.updateClicked, 'emit');
    const task = { id: '1', title: 'Test Task', completed: false, createdAt: new Date(), updatedAt: new Date() };
    component.todo = task;
    component.onUpdateClick();
    expect(updateClickedSpy).toHaveBeenCalledWith(task);
  });
});
