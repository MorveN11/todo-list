import { Component, EventEmitter, Output } from '@angular/core';

import { GenericButtonComponent } from '@/generic-button/generic-button.component';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
})
export class AddButtonComponent extends GenericButtonComponent {
  override title: string = 'Save';
  @Output() saveClicked: EventEmitter<string> = new EventEmitter<string>();

  override onClick(): void {
    this.saveClicked.emit();
  }
}
