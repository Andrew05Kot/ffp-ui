import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesOverviewComponent } from '@app/pages/dishes/dishes-overview/dishes-overview.component';

const routes: Routes = [
  {
    path: '',
    component: DishesOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule {
}
