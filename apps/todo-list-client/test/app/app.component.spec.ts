import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddButtonComponent } from '@/add-button/add-button.component';
import { AppComponent } from '@/app.component';
import { CheckBoxButtonComponent } from '@/check-box-button/check-box-button.component';
import { DeleteButtonComponent } from '@/delete-button/delete-button.component';
import { EditButtonComponent } from '@/edit-button/edit-button.component';
import { GenericFormComponent } from '@/generic-form/generic-form.component';
import { ListManagerComponent } from '@/list-manager/list-manager.component';
import { TaskService } from '@/modules/task/services/task.service';
import { TodoItemComponent } from '@/todo-item/todo-item.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListManagerComponent,
        GenericFormComponent,
        AddButtonComponent,
        TodoItemComponent,
        EditButtonComponent,
        CheckBoxButtonComponent,
        DeleteButtonComponent,
      ],
      imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [TaskService],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(component.title).toEqual('todo-list-client');
  });
});
