import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from '@app/client/client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('@app/client/pages/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('@app/client/pages/ordering/ordering.module').then(m => m.OrderingModule)
      },
      {
        path: '**', redirectTo: 'home-page'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
