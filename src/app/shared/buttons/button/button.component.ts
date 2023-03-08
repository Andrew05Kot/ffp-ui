import { Component, Input } from '@angular/core';

export type ButtonType = 'button' | 'submit';
@Component({
  selector: 'ffp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type: ButtonType;

  constructor() {
    this.type = 'button';
  }

}
