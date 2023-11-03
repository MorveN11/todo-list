import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-box-button',
  templateUrl: './check-box-button.component.html',
})
export class CheckBoxButtonComponent {
  @Input() isChecked: boolean = true;
  @Output() updateClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick(): void {
    this.updateClicked.emit();
  }
}
