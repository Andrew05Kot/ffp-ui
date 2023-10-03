import { Component, Input } from '@angular/core';
import { Dish } from '@app/models/backend';

@Component({
  selector: 'app-dish-card-content',
  templateUrl: './dish-card-content.component.html',
  styleUrls: ['./dish-card-content.component.scss']
})
export class DishCardContentComponent {

  @Input() dish: Dish;

}
