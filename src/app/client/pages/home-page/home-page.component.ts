import { Component } from '@angular/core';
import { DishService } from '@app/admin-panel/services/api/dish.service';
import { RequestParams } from '@app/admin-panel/models/backend';
import { SlideModel } from '@app/client/components/carousel/slide-model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  slides: SlideModel[];

  constructor(private dishService: DishService) {
    this.initTop5Dishes();
  }

  private initTop5Dishes(): void {
    const requestParams: RequestParams = {
      pageIndex: 1,
      pageSize: 5
    };
    this.dishService.getAll$(requestParams).subscribe(response => {
      this.slides = response.items.map(item => {
        return {
          title: item.name,
          subtitle: item.category.name,
          description: item.description,
          imageUrl: item.imageUrl
        }
      });
    });
  }

}
