import { FormControl, FormGroup } from '@angular/forms';
import { EstablishmentRequest } from '@app/models/backend';
import { FormGroupDef } from '@app/core/utils/form/form-group-def.type';
import { Injector } from '@angular/core';
import { DestroyService } from '@app/core';

export class EstablishmentForm extends FormGroup<FormGroupDef<EstablishmentRequest>> {
  private readonly viewDestroyed$ = this.injector.get(DestroyService);

  constructor(private readonly injector: Injector) {
    super({
      id: new FormControl(null),
      country: new FormControl('', {nonNullable: true}),
      city: new FormControl('', {nonNullable: true}),
      street: new FormControl('', {nonNullable: true}),
      houseNumber: new FormControl(1, {nonNullable: true})
    });
  }
}
