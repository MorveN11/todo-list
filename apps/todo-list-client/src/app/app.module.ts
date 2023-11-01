import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TaskService } from './modules/task/services/task.service';

@NgModule({
  declarations: [AppComponent, ListManagerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
