import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EstablishmentOverviewComponent
} from '@app/pages/establishment/establishment-overview/establishment-overview.component';
import { OrderingOverviewComponent } from '@app/pages/orderings/ordering-overview/ordering-overview.component';

const routes: Routes = [
  {
    path: '',
    component: OrderingOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderingRoutingModule {
}
