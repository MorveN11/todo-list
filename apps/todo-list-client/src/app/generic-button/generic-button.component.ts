import { Component } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
})
export abstract class InputButtonUnitComponent {
  abstract title: string;

  abstract changeAction(): void;
}
