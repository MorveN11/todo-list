import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@/modules/task/entities/task.entity';
import { TaskService } from '@/modules/task/services/task.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  constructor(private taskService: TaskService) {}

  @Input() todo!: Task;
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter<string>();

  onDeleteClick(): void {
    this.deleteClicked.emit(this.todo.id);
  }
}
