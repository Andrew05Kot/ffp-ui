import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dish, DishRequest } from '@app/admin-panel/models/backend';
import { FormGroupDef } from '@app/core/utils/form/form-group-def.type';
import { Injector } from '@angular/core';
import { DestroyService } from '@app/core';

export class DishForm extends FormGroup<FormGroupDef<DishRequest>> {
  private readonly viewDestroyed$ = this.injector.get(DestroyService);

  constructor(private readonly injector: Injector, data?: Dish) {
    super({
      id: new FormControl(data?.id || null),
      name: new FormControl(data?.name || null, Validators.required),
      description: new FormControl(data?.description || null, Validators.required),
      price: new FormControl(data?.price || 1, Validators.required),
      categoryId: new FormControl(data?.category?.id || 0, Validators.required),
      imageUrl: new FormControl(data?.imageUrl || null, Validators.required)
    });

  }
}
