import { Component } from '@angular/core';
import { selectOrdering } from '@app/store/ordering/ordering.selector';
import { Selectors } from '@app/models/frontend/selector';

@Component({
  selector: 'app-ordering-overview',
  templateUrl: './ordering-overview.component.html',
  styleUrls: ['./ordering-overview.component.scss']
})
export class OrderingOverviewComponent {

  displayedColumns: string[] = [
    'id',
    'cardNumber',
    'paymentMethod',
    'selectedCategories',
    'createdDate',
    'lastModifiedDate'
  ];

  protected readonly selectors: Selectors = selectOrdering;
}
