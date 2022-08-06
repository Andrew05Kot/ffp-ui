import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { AdminDashboardComponent } from "./dashboard/admin-dashboard.component";
import { OrderTableComponent } from "./order/table/order-table.component";

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
                path: 'orders', component: OrderTableComponent
            }
        ]
    }
];

export const AdminRouting = RouterModule.forChild(routes);
