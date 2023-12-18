import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DishService } from '@app/admin-panel/services/api/dish.service';
import { Dish } from '@app/admin-panel/models/backend';
import { OrderItem } from '@app/client/pages/ordering/model';
import { OrderingService } from '@app/client/services/api/ordering.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersHistoryComponent {

  dishes: Dish[] = [];
  orderItems: OrderItem[] = [];

  constructor(private dishesService: DishService,
              private orderingService: OrderingService,
              private cdr: ChangeDetectorRef) {
    this.initOrdersFromDB();
  }

  private initOrdersFromDB(): void {
    this.orderingService.getAllByUser$('832d6104-1b36-4e57-af17-8bc493d8d77d').subscribe(res => {
      this.orderItems = res.items.filter(r => r.dishesToOrder?.length > 1).map(orderResponse => {
        return {
          id: orderResponse.id,
          date: this.getRandomDateLastThreeMonths(),
          totalPrice: orderResponse.totalPrice,
          status: orderResponse.orderStatus,
          dishes: orderResponse.dishesToOrder
        } as unknown as OrderItem;
      });
      this.cdr.detectChanges();
      console.log(' this.orderItems >> ',  this.orderItems)
    });
  }

  private getRandomDateLastThreeMonths(): Date {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const minDate = new Date(currentYear, currentMonth - 3, 1); // Three months ago
    const randomTime = Math.random() * (currentDate.getTime() - minDate.getTime()) + minDate.getTime();

    return new Date(randomTime);
  }

}


