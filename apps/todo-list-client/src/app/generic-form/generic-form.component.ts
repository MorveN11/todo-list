import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
})
export class GenericFormComponent {
  @Input() labelText!: string;
  @Input() inputType: string = 'text';
  @Input() placeholderText: string = 'Add something to do..';
  @Input() isRequired: boolean = false;
  @Input()
  control: FormControl = new FormControl('la comes gil');
  @Input() type!: string;
  inputValue = '';
  onSaveClicked(title: string) {
    console.log(`Save button clicked with title: ${this.inputValue}`);
    console.log('Input Value:', this.inputValue);
    console.log('Button Title:', title);
    console.log(this.control);
  }
}
