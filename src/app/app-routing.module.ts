import { inject, NgModule } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/interceptors/auth.guard';

const isAuthenticated: CanActivateFn = (route, state) => {
  return inject(AuthGuard).isAccessAllowed(route, state);
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        canActivate: [isAuthenticated],
        loadChildren: () => import('@app/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
      },
      {
        path: '**', redirectTo: 'login'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
