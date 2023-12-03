import { ChangeDetectionStrategy, Component, inject, Injector } from '@angular/core';
import { DishForm } from '@app/admin-panel/pages/dishes/creating-editing-dish/form/dish-form.class';
import { MatDialogRef } from '@angular/material/dialog';
import { DishService } from '@app/admin-panel/services/api/dish.service';
import { ImageService } from '@app/admin-panel/services/api/image.service';
import { Dish, DishRequest } from '@app/admin-panel/models/backend';

@Component({
  selector: 'app-creating-editing-dish',
  templateUrl: './creating-editing-dish.component.html',
  styleUrls: ['./creating-editing-dish.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatingEditingDishComponent {

  action: 'create' | 'edit';
  uploadedImage: File = null;

  public readonly form = new DishForm(
    inject(Injector)
  );

  constructor(public dialogRef: MatDialogRef<CreatingEditingDishComponent>,
              private imageService: ImageService,
              private dishService: DishService) {
  }

  close(): void {
    this.dialogRef.close();
  }

  create(): void {
    this.dishService.create$(this.form.getRawValue())
      .subscribe(result => this.processOnDishCreated(result));
  }

  catchMainImage(file: File): void {
    this.uploadedImage = file;
  }

  private processOnDishCreated(createdDishResponse: Dish): void {
    if (createdDishResponse) {
      this.saveImage(createdDishResponse);
    }
    this.dialogRef.close();
  }

  private saveImage(createdDishResponse: Dish): void {
    this.imageService.uploadImage$(this.uploadedImage).subscribe(response => {
      const dishRequest: DishRequest = this.form.getRawValue();
      dishRequest.imageUrl = response.url;
      this.dishService.update$(createdDishResponse.id, dishRequest)
        .subscribe(result => {
        });
    });
  }

}
