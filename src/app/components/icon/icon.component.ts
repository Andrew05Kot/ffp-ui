import { Component, Input } from '@angular/core';

@Component({
  selector: 'ffp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {

  @Input() public icon?: string;
  @Input() public class?: string;
  constructor() {}
}
