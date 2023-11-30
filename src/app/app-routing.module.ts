import { inject, NgModule } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/interceptors/auth.guard';

const isAuthenticated: CanActivateFn = (route, state) => {
  return inject(AuthGuard).isAccessAllowed(route, state);
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'demo',
        canActivate: [isAuthenticated],
        loadChildren: () => import('@app/admin/pages/demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'dashboard',
        canActivate: [isAuthenticated],
        loadChildren: () => import('@app/admin/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'ordering',
        canActivate: [isAuthenticated],
        loadChildren: () => import('@app/admin/pages/orderings/ordering.module').then(m => m.OrderingModule)
      },
      {
        path: 'dishes',
        canActivate: [isAuthenticated],
        loadChildren: () => import('@app/admin/pages/dishes/dishes.module').then(m => m.DishesModule)
      },
      {
        path: 'establishment',
        canActivate: [isAuthenticated],
        loadChildren: () => import('@app/admin/pages/establishment/establishment.module').then(m => m.EstablishmentModule)
      },
      {
        path: 'users',
        canActivate: [isAuthenticated],
        loadChildren: () => import('@app/admin/pages/users/users.module').then(m => m.UsersModule)
      },
      {
        path: '**', redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
