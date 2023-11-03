import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TaskService } from '@/modules/task/services/task.service';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
})
export class GenericFormComponent {
  constructor(private taskService: TaskService) {}

  @Input() labelText!: string;
  @Input() inputType: string = 'text';
  @Input() placeholderText: string = 'Add something to do..,';
  @Input() isRequired: boolean = false;
  @Input()
  control: FormControl = new FormControl();
  @Input() type!: string;
  inputValue = '';

  onSaveClicked() {
    this.taskService.createTask({ title: this.inputValue });
    this.inputValue = '';
  }
}
