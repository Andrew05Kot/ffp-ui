import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    data: {
      breadcrumb: {
        skip: true
      }
    },
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: AdminDashboardComponent
      }
    ]
  }
];

export const AdminRouting = RouterModule.forChild(routes);
