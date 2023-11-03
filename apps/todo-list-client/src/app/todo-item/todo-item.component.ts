import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@/modules/task/entities/task.entity';
import { TaskService } from '@/modules/task/services/task.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  constructor(private taskService: TaskService) {}

  isEditing: boolean = false;
  editedTitle: string = '';

  @Input() todo!: Task;
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();

  onDeleteClick(): void {
    this.deleteClicked.emit(this.todo.id);
  }

  startEditing() {
    this.isEditing = true;
    this.editedTitle = this.todo.title;
  }

  saveTitle() {
    this.isEditing = false;
    if (this.editedTitle !== this.todo.title) {
      this.todo.title = this.editedTitle;
      this.taskService.updateTask(this.todo.id, { title: this.editedTitle }).subscribe(() => {
        this.titleChanged.emit(this.editedTitle);
      });
    }
  }
}
