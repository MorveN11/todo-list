import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddButtonComponent } from '@/add-button/add-button.component';
import { GenericFormComponent } from '@/generic-form/generic-form.component';
import { TaskService } from '@/modules/task/services/task.service';

describe('GenericFormComponent', () => {
  let component: GenericFormComponent;
  let fixture: ComponentFixture<GenericFormComponent>;
  let taskService: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericFormComponent, AddButtonComponent],
      providers: [TaskService],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
    });

    fixture = TestBed.createComponent(GenericFormComponent);
    component = fixture.componentInstance;

    taskService = TestBed.inject(TaskService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default input values', () => {
    expect(component.inputType).toEqual('text');
    expect(component.placeholderText).toEqual('Add something to do...');
    expect(component.isRequired).toBeFalsy();
    expect(component.control instanceof FormControl).toBeTruthy();
  });

  it('onSaveClicked should call taskService.createTask and reset inputValue', () => {
    const createTaskSpy = jest.spyOn(taskService, 'createTask');
    component.inputValue = 'Test Task';
    component.onSaveClicked();
    expect(createTaskSpy).toHaveBeenCalledWith({ title: 'Test Task' });
    expect(component.inputValue).toEqual('');
  });
});
