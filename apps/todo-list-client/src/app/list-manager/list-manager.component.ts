import { Component, OnInit } from '@angular/core';

import { Task } from '@/modules/task/entities/task.entity';
import { TaskService } from '@/modules/task/services/task.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
})
export class ListManagerComponent implements OnInit {
  todoList: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.todoList = tasks;
    });
  }
}
