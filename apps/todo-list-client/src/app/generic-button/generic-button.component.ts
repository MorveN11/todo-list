import { Component } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
})
export abstract class GenericButtonComponent {
  abstract title: string;

  abstract onClick(): void;
}
