import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DishRequest } from '@app/admin-panel/models/backend';
import { FormGroupDef } from '@app/core/utils/form/form-group-def.type';
import { Injector } from '@angular/core';
import { DestroyService } from '@app/core';

export class DishForm extends FormGroup<FormGroupDef<DishRequest>> {
  private readonly viewDestroyed$ = this.injector.get(DestroyService);

  constructor(private readonly injector: Injector) {
    super({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl(1, Validators.required),
      categoryId: new FormControl(1, Validators.required),
      imageUrl: new FormControl(null, Validators.required)
    });
  }
}
