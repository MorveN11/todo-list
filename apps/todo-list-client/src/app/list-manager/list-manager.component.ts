import { Component, OnInit } from '@angular/core';

import { Task } from '@/modules/task/entities/task.entity';
import { TaskService } from '@/modules/task/services/task.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
})
export class ListManagerComponent implements OnInit {
  todoList!: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((todos) => {
      this.todoList = todos;
    });
  }

  onDeleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.todoList = this.todoList.filter((task) => task.id !== taskId);
    });
  }
}
