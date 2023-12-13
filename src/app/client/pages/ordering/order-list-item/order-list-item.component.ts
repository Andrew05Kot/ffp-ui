import { Component, Input } from '@angular/core';
import { OrderItem } from '@app/client/pages/ordering/model';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent {

  @Input()
  orderItem: OrderItem;

}
