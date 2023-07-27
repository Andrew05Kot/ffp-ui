import { Component, inject, Injector } from '@angular/core';
import { DishForm } from '@app/pages/dishes/creating-editing-dish/form/dish-form.class';
import { MatDialogRef } from '@angular/material/dialog';
import { DishService } from '@app/services/api/dish.service';

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

  constructor(public dialogRef: MatDialogRef<CreatingEditingDishComponent>,
              private dishService: DishService) {
  }

  close(): void {
    this.dialogRef.close();
  }

  create(): void {
    this.dishService.create$(this.form.getRawValue()).subscribe(result => {
        console.log('result >> ', result);
        this.dialogRef.close();
      }
    );
  }
}
