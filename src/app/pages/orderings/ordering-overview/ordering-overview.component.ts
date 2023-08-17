import { Component, inject } from '@angular/core';
import { ApiService } from '@app/services/api/api.service';
import { OrderingService } from '@app/services/api/ordering.service';

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

  protected readonly service: ApiService = inject(OrderingService);
}
