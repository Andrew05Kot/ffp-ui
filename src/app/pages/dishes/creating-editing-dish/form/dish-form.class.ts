import { FormControl, FormGroup } from '@angular/forms';
import { DishRequest } from '@app/models/backend';
import { FormGroupDef } from '@app/core/utils/form/form-group-def.type';
import { Injector } from '@angular/core';
import { DestroyService } from '@app/core';

export class DishForm extends FormGroup<FormGroupDef<DishRequest>> {
  private readonly viewDestroyed$ = this.injector.get(DestroyService);

  constructor( private readonly injector: Injector) {
    super({
      id: new FormControl(null),
      name: new FormControl('', {nonNullable: true}),
      description: new FormControl('', {nonNullable: true}),
      price: new FormControl(1, {nonNullable: true}),
      categoryId: new FormControl(1, {nonNullable: true}),
      imageUrl: new FormControl(null, {nonNullable: true})
    });
  }
}
