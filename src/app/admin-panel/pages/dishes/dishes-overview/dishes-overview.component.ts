import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  CreatingEditingDishComponent
} from '@app/admin-panel/pages/dishes/creating-editing-dish/creating-editing-dish.component';
import { DishService } from '@app/admin-panel/services/api/dish.service';
import { ApiService } from '@app/admin-panel/services/api/api.service';
import { Dish } from '@app/admin-panel/models/backend';

@Component({
  selector: 'app-dishes-overview',
  templateUrl: './dishes-overview.component.html',
  styleUrls: ['./dishes-overview.component.scss']
})
export class DishesOverviewComponent {

  displayedColumns: string[] = [
    'id',
    'imageUrl',
    'name',
    'category',
    'description',
    'price',
    'createdDate',
    'lastModifiedDate'
  ];

  service: ApiService = inject(DishService);

  constructor(private dialog: MatDialog) {
  }

  openCreateDish(): void {
    this.dialog.open(CreatingEditingDishComponent, {
      width: '900px'
    });
  }

  openEditDish(dish: Dish): void {
    this.dialog.open(CreatingEditingDishComponent, {
      width: '900px',
      data: {
        dish: dish
      }
    });
  }
}
