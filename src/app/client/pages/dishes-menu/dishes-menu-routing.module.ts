import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesMenuComponent } from '@app/client/pages/dishes-menu/dishes-menu.component';

const routes: Routes = [
  {
    path: '',
    component: DishesMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesMenuRoutingModule { }
