import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  CreatingEditingEstablishmentComponent
} from '@app/admin-panel/pages/establishment/creating-editing-establishment/creating-editing-establishment.component';
import { ApiService } from '@app/admin-panel/services/api/api.service';
import { EstablishmentService } from '@app/admin-panel/services/api/establishment.service';

@Component({
  selector: 'app-establishment-overview',
  templateUrl: './establishment-overview.component.html',
  styleUrls: ['./establishment-overview.component.scss']
})
export class EstablishmentOverviewComponent {

  displayedColumns: string[] = [
    'id',
    'address',
    'country',
    'city',
    'street',
    'houseNumber',
    'createdDate',
    'lastModifiedDate',
    // 'longitude',
    // 'latitude'
  ];

  protected readonly service: ApiService = inject(EstablishmentService);

  constructor(private dialog: MatDialog) {
  }

  openCreateDish(): void {
    this.dialog.open(CreatingEditingEstablishmentComponent, {
      width: '900px',
      data: {
        action: 'create'
      }
    })
  }

}
