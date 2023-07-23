import { Component } from '@angular/core';
import {
  selectAllEstablishment,
  selectEstablishmentError,
  selectEstablishmentLoading,
  selectEstablishmentTotal
} from '@app/store/establishment/establishment.selector';

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
    'lastModifiedDate'
  ];

  protected readonly selectAllEstablishment = selectAllEstablishment;
  protected readonly selectEstablishmentTotal = selectEstablishmentTotal;
  protected readonly selectEstablishmentLoading = selectEstablishmentLoading;
  protected readonly selectEstablishmentError = selectEstablishmentError;

  constructor() {
  }

}
