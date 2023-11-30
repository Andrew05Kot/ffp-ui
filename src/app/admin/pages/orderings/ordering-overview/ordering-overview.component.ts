import { Component, inject } from '@angular/core';
import { ApiService } from '@app/admin/services/api/api.service';
import { OrderingService } from '@app/admin/services/api/ordering.service';

@Component({
  selector: 'app-ordering-overview',
  templateUrl: './ordering-overview.component.html',
  styleUrls: ['./ordering-overview.component.scss']
})
export class OrderingOverviewComponent {

  displayedColumns: string[] = [
    'createdDate',
    'lastModifiedDate',
    'totalPrice',
    'orderStatus',
    'paymentMethod'
  ];

  protected readonly service: ApiService = inject(OrderingService);
}
