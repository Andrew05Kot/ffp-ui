import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstablishmentRequest } from '@app/admin/models/backend';
import { FormGroupDef } from '@app/core/utils/form/form-group-def.type';
import { Injector } from '@angular/core';
import { DestroyService } from '@app/core';

export class EstablishmentForm extends FormGroup<FormGroupDef<EstablishmentRequest>> {

  private readonly viewDestroyed$ = this.injector.get(DestroyService);

  constructor(private readonly injector: Injector) {
    super({
      id: new FormControl(null),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      houseNumber: new FormControl(null, Validators.required),
      latitude: new FormControl(null, Validators.required),
      longitude: new FormControl(null, Validators.required)
    });
  }
}
