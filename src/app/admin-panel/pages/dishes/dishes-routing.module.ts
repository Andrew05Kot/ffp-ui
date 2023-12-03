import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesOverviewComponent } from '@app/admin-panel/pages/dishes/dishes-overview/dishes-overview.component';
import { DishesCardsComponent } from '@app/admin-panel/pages/dishes/dishes-cards/dishes-cards.component';

const routes: Routes = [
  {
    path: '',
    component: DishesOverviewComponent
  },
  {
    path: 'cards',
    component: DishesCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule {
}
