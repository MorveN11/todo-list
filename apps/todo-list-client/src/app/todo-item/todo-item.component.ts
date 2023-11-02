import { Component, Input } from '@angular/core';

import { Task } from '@/modules/task/entities/task.entity';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo!: Task;
}
