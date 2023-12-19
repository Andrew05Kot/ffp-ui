import { Component } from '@angular/core';
import { SlideModel } from '@app/client/components/carousel/slide-model';
import { DishService } from '@app/admin-panel/services/api/dish.service';
import { Dish } from '@app/admin-panel/models/backend';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  dishes: Dish[] = [];
  sortedDishes: Dish[] = [];
  slides: SlideModel[] = [];

  constructor(private dishService: DishService) {
    this.loadItems();
  }

  private loadItems(): void {
    this.dishService.getAllUnpaged$().subscribe(response => {
      this.dishes = response;
      this.sortedDishes = response;
      this.initTop5DishesByRecommendations();
    });
  }

  private initTop5DishesByRecommendations(): void {
    this.sortedDishes.sort((a, b)  => {
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1
      }
      return 0;
    });
    for (let i = 0; i < 5; i++) {
      this.slides.push({
        title: this.sortedDishes[i].name,
        subtitle: this.sortedDishes[i].category.name,
        description: this.sortedDishes[i].description,
        imageUrl: this.sortedDishes[i].imageUrl,
        labels: this.sortedDishes[i].labels,
        oldPrice: this.sortedDishes[i].price,
        newPrice: this.sortedDishes[i].price * 0.8
      });
    }
  }

}
