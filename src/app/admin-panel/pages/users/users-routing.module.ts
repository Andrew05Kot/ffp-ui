import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersOverviewComponent } from '@app/admin-panel/pages/users/users-overview/users-overview.component';

const routes: Routes = [
  {
    path: '',
    component: UsersOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
