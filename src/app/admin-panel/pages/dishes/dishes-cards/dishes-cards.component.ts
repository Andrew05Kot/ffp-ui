import { Component, Input } from '@angular/core';
import { Dish } from '@app/admin-panel/models/backend';

@Component({
  selector: 'app-dishes-cards',
  templateUrl: './dishes-cards.component.html',
  styleUrls: ['./dishes-cards.component.scss']
})
export class DishesCardsComponent {

  private _dishes: Dish[];

  get dishes(): Dish[] {
    return this._dishes;
  }

  @Input() set dishes(value: Dish[]) {
    this._dishes = value;
  }
}
