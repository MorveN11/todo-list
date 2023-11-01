import { Component } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
})
export abstract class InputButtonUnitComponent {
  title: string = 'save';

  abstract changeAction(title: string): void;
}
