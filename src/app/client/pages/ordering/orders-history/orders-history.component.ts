import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { DishService } from '@app/admin-panel/services/api/dish.service';
import { Dish } from '@app/admin-panel/models/backend';
import { OrderItem } from '@app/client/pages/ordering/model';

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
              private cdr: ChangeDetectorRef) {
    this.initDishes();
  }

  private initDishes(): void {
    const params = {
      pageIndex: 0,
      pageSize: 40
    }
    this.dishesService.getAll$(params).subscribe(page => {
      this.dishes = page.items;
      this.initOrderItems();
    });
  }

  private initOrderItems(): void {
    let dishesCount = this.getRandomInt(5);
    let dishes = this.getRandomDishes(dishesCount);
    let totalPrice = 0;
    dishes.map(d => d.price).forEach( num => {
      totalPrice += num;
    });
    this.orderItems.push(
      {
        id: uuidv4(),
        date: new Date('01.03.2023'),
        totalPrice: dishes.map(d => d.price).length,
        status: 'RECEIVED',
        dishes: dishes,
      }
    );

    dishesCount = this.getRandomInt(5);
    dishes = this.getRandomDishes(dishesCount);
    totalPrice = 0;
    dishes.map(d => d.price).forEach( num => {
      totalPrice += num;
    });
    this.orderItems.push(
      {
        id: uuidv4(),
        date: new Date('03.03.2023'),
        totalPrice: 34.80,
        status: 'RECEIVED',
        dishes: this.getRandomDishes(6),
      }
    );

    dishesCount = this.getRandomInt(5);
    dishes = this.getRandomDishes(dishesCount);
    totalPrice = 0;
    dishes.map(d => d.price).forEach( num => {
      totalPrice += num;
    });
    this.orderItems.push(
      {
        id: uuidv4(),
        date: new Date('05.03.2023'),
        totalPrice: 4.20,
        status: 'RECEIVED',
        dishes: this.getRandomDishes(dishesCount),
      }
    );

    dishesCount = this.getRandomInt(5);
    dishes = this.getRandomDishes(dishesCount);
    totalPrice = 0;
    dishes.map(d => d.price).forEach( num => {
      totalPrice += num;
    });
    this.orderItems.push(
      {
        id: uuidv4(),
        date: new Date('07.07.2023'),
        totalPrice: 4.20,
        status: 'RECEIVED',
        dishes: this.getRandomDishes(dishesCount),
      }
    );

    dishesCount = this.getRandomInt(5);
    dishes = this.getRandomDishes(dishesCount);
    totalPrice = 0;
    dishes.map(d => d.price).forEach( num => {
      totalPrice += num;
    });
    this.orderItems.push(
      {
        id: uuidv4(),
        date: new Date('08.08.2023'),
        totalPrice: 4.20,
        status: 'RECEIVED',
        dishes: this.getRandomDishes(dishesCount),
      }
    );

    dishesCount = this.getRandomInt(5);
    dishes = this.getRandomDishes(dishesCount);
    totalPrice = 0;
    dishes.map(d => d.price).forEach( num => {
      totalPrice += num;
    });
    this.orderItems.push(
      {
        id: uuidv4(),
        date: new Date('09.039.2023'),
        totalPrice: 4.20,
        status: 'RECEIVED',
        dishes: this.getRandomDishes(dishesCount),
      }
    );

    dishesCount = this.getRandomInt(5);
    dishes = this.getRandomDishes(dishesCount);
    totalPrice = 0;
    dishes.map(d => d.price).forEach( num => {
      totalPrice += num;
    });
    this.orderItems.push(
      {
        id: uuidv4(),
        date: new Date('12.12.2023'),
        totalPrice: 4.20,
        status: 'RECEIVED',
        dishes: this.getRandomDishes(dishesCount),
      }
    );

    dishesCount = this.getRandomInt(5);
    dishes = this.getRandomDishes(dishesCount);
    totalPrice = 0;
    dishes.map(d => d.price).forEach( num => {
      totalPrice += num;
    });
    this.orderItems.push(
      {
        id: uuidv4(),
        date: new Date('11.11.2023'),
        totalPrice: 4.20,
        status: 'RECEIVED',
        dishes: this.getRandomDishes(dishesCount),
      }
    );

    dishesCount = this.getRandomInt(5);
    dishes = this.getRandomDishes(dishesCount);
    totalPrice = 0;
    dishes.map(d => d.price).forEach( num => {
      totalPrice += num;
    });
    this.orderItems.push(
      {
        id: uuidv4(),
        date: new Date('10.10.2023'),
        totalPrice: 4.20,
        status: 'RECEIVED',
        dishes: this.getRandomDishes(dishesCount),
      }
    );

    this.cdr.detectChanges();
  }

  private getRandomDishes(count: number): Dish[] {
    const randomDishes: Dish[] = [];
    const dishCount = this.dishes.length;

    if (count <= 0 || dishCount === 0) {
      return randomDishes;
    }

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * dishCount);
      randomDishes.push(this.dishes[randomIndex]);
    }

    return randomDishes;
  }

  getRandomInt(max): number {
    const randValue = Math.floor(Math.random() * max);
    return randValue > 0 ? randValue : 1;
  }

}


