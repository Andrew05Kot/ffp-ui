import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '@app/admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('@app/admin-panel/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'ordering',
        loadChildren: () => import('@app/admin-panel/pages/orderings/ordering.module').then(m => m.OrderingModule)
      },
      {
        path: 'dishes',
        loadChildren: () => import('@app/admin-panel/pages/dishes/dishes.module').then(m => m.DishesModule)
      },
      {
        path: 'establishment',
        loadChildren: () => import('@app/admin-panel/pages/establishment/establishment.module').then(m => m.EstablishmentModule)
      },
      {
        path: 'users',
        loadChildren: () => import('@app/admin-panel/pages/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('@app/admin-panel/pages/demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: '**', redirectTo: 'home-page'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {
}
