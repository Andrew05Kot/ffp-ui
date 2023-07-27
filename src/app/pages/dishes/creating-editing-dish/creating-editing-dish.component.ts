import { Component, inject, Injector } from '@angular/core';
import { DishForm } from '@app/pages/dishes/creating-editing-dish/form/dish-form.class';

@Component({
  selector: 'app-creating-editing-dish',
  templateUrl: './creating-editing-dish.component.html',
  styleUrls: ['./creating-editing-dish.component.scss']
})
export class CreatingEditingDishComponent {

  action: 'create' | 'edit';

  public readonly form = new DishForm(
    inject(Injector)
  );

  constructor() {
  }
}
