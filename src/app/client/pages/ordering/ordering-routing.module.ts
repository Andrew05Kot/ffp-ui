import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersHistoryComponent } from '@app/client/pages/ordering/orders-history/orders-history.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderingRoutingModule { }
