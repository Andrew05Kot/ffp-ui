import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { OrderComponent } from "./order/order.component";

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
            },
            {
                path: 'orders', component: OrderComponent
            }
        ]
    }
];

export const AdminRouting = RouterModule.forChild(routes);
