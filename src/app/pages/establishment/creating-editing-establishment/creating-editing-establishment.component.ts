import { Component, inject, Injector } from '@angular/core';
import {
  EstablishmentForm
} from '@app/pages/establishment/creating-editing-establishment/form/establishment-form.class';
import { MatDialogRef } from '@angular/material/dialog';
import { EstablishmentService } from '@app/services/api/establishment.service';

@Component({
  selector: 'app-creating-editing-establishment',
  templateUrl: './creating-editing-establishment.component.html',
  styleUrls: ['./creating-editing-establishment.component.scss']
})
export class CreatingEditingEstablishmentComponent {

  action: 'create' | 'edit';

  public readonly form = new EstablishmentForm(
    inject(Injector)
  );

  constructor(public dialogRef: MatDialogRef<CreatingEditingEstablishmentComponent>,
              private establishmentService: EstablishmentService) {
  }

  close(): void {
    this.dialogRef.close();
  }

  create(): void {
    this.establishmentService.create$(this.form.getRawValue()).subscribe(result =>
      this.dialogRef.close(true))
  }
}
