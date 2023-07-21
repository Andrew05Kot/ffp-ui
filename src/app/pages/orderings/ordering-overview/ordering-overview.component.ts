import { Component } from '@angular/core';
import {
  selectAllOrdering,
  selectOrderingError,
  selectOrderingLoading,
  selectOrderingTotal
} from '@app/store/ordering/ordering.selector';

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

  protected readonly selectAllOrdering = selectAllOrdering;
  protected readonly selectOrderingTotal = selectOrderingTotal;
  protected readonly selectOrderingLoading = selectOrderingLoading;
  protected readonly selectOrderingError = selectOrderingError;
}
