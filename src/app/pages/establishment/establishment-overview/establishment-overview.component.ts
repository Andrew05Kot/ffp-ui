import { Component } from '@angular/core';
import { selectEstablishment } from '@app/store/establishment/establishment.selector';
import { Selectors } from '@app/models/frontend/selector';

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

  protected readonly selectors: Selectors = selectEstablishment;

  constructor() {
  }

}
