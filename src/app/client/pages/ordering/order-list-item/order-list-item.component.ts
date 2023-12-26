import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { OrderItem } from '@app/client/pages/ordering/model';
import { Dish } from '@app/admin-panel/models/backend';
import { DishService } from '@app/admin-panel/services/api/dish.service';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListItemComponent implements OnInit {

  dishes: Dish[] = [];

  @Input()
  orderItem: OrderItem;

  constructor(private dishService: DishService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('orderItem >> ', this.orderItem)
    this.orderItem.dishes.forEach(d => {
      this.dishService.getById$(d.dishId).subscribe(dish => {
        console.log('dish >> ', dish)
        this.dishes.push(dish);
        this.cdr.detectChanges();
      });
    });
  }

}
