import { Component, OnInit } from '@angular/core';
import { DishService } from '@app/services/api/dish.service';
import { Dish, RequestParams } from '@app/models/backend';

@Component({
  selector: 'app-dishes-cards',
  templateUrl: './dishes-cards.component.html',
  styleUrls: ['./dishes-cards.component.scss']
})
export class DishesCardsComponent implements OnInit {

  dishes: Dish[] = [];

  constructor(private dishService: DishService) {
  }

  ngOnInit(): void {
    this.initDishes();
  }

  private initDishes(): void {
    const requestParams: RequestParams = {
      pageIndex: 0,
      pageSize: 15
    };
    this.dishService.getAll$(requestParams).subscribe(response => {
      this.dishes = response.items;
    });
  }

}
