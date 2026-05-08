import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-icon',
  imports: [],
  templateUrl: './input-icon.component.html',
  styleUrl: './input-icon.component.css'
})
export class InputIconComponent {

  @Input({required: true}) icon: string = '';
  @Input({required: true}) placeholder: string = '';
}
