import { Component } from '@angular/core';
import { selectEstablishment } from '@app/store/dish/dish.selector';
import { MatDialog } from '@angular/material/dialog';
import { CreatingEditingDishComponent } from '@app/pages/dishes/creating-editing-dish/creating-editing-dish.component';
import { Selectors } from '@app/models/frontend/selector';

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

  protected readonly selectors: Selectors = selectEstablishment;

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
