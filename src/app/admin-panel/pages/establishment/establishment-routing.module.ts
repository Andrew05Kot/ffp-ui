import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EstablishmentOverviewComponent
} from '@app/admin-panel/pages/establishment/establishment-overview/establishment-overview.component';
import { EstablishmentsMapComponent } from '@app/admin-panel/pages/establishment/establishments-map/establishments-map.component';
import {
  EstablishmentsListComponent
} from '@app/admin-panel/pages/establishment/establishments-list/establishments-list.component';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentOverviewComponent
  },
  {
    path: 'map',
    component: EstablishmentsMapComponent
  },
  {
    path: 'list',
    component: EstablishmentsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentRoutingModule {
}
