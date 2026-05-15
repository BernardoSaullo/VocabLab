import { Component, Input } from '@angular/core';
import { BaseContainerComponent } from "../base-container/base-container.component";

@Component({
  selector: 'app-base-card',
  imports: [BaseContainerComponent],
  templateUrl: './base-card.component.html',
  styleUrl: './base-card.component.scss'
})
export class BaseCardComponent {
  @Input() iconField: string = '';
  @Input() mainText: string = '';
  @Input() mainTextSize: string = '';
  @Input() secondText: string = '';
  @Input() icon_bg: boolean = false;
}
