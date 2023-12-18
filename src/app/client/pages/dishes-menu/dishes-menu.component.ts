import { Component } from '@angular/core';
import { Dish, RequestParams } from '@app/admin-panel/models/backend';
import { DishService } from '@app/admin-panel/services/api/dish.service';

@Component({
  selector: 'app-dishes-menu',
  templateUrl: './dishes-menu.component.html',
  styleUrls: ['./dishes-menu.component.scss']
})
export class DishesMenuComponent {

  searchText: string = '';
  private searchDirection: string = ':';
  private searchField: string = 'text';
  private search: string = '';

  dishes: Dish[] = [];

  constructor(private dishService: DishService) {
    this.loadItems();
  }

  onSearchTyping(): void {
    if (this.searchText == '') {
      this.loadItems();
      return;
    }
    this.searchField = 'text';
    this.search = this.searchField + this.searchDirection + this.searchText;
    this.loadItems();
  }

  private loadItems(): void {
    const requestParams: RequestParams = {
      pageIndex: 0,
      pageSize: 15,
      search: this.search
    };
    this.dishService.getAll$(requestParams).subscribe(response => {
      this.dishes = response.items;
    });
  }

}
