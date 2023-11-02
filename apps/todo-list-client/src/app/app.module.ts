import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TaskService } from './modules/task/services/task.service';
import { AddButtonComponent } from './add-button/add-button.component';

@NgModule({
  declarations: [AppComponent, ListManagerComponent, GenericFormComponent, AddButtonComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
