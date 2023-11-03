import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@/modules/task/entities/task.entity';

@Component({
  selector: 'app-check-box-button',
  templateUrl: './check-box-button.component.html',
})
export class CheckBoxButtonComponent {
  @Input() todo!: Task;
  @Output() updateClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.updateClicked.emit();
  }
}
