import { Component } from '@angular/core';
import { selectAllDishes, selectDishError, selectDishesTotal, selectDishLoading } from '@app/store/dish/dish.selector';
import { MatDialog } from '@angular/material/dialog';
import { CreatingEditingDishComponent } from '@app/pages/dishes/creating-editing-dish/creating-editing-dish.component';

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

  protected readonly selectAllDishes = selectAllDishes;
  protected readonly selectDishesTotal = selectDishesTotal;
  protected readonly selectDishLoading = selectDishLoading;
  protected readonly selectDishError = selectDishError;

  constructor(private dialog: MatDialog) {
    this.openCreateDish();
  }

  openCreateDish(): void {
    this.dialog.open(CreatingEditingDishComponent, {
      width: '600px',
      data: {
        action: 'create'
      }
    })
  }

}
