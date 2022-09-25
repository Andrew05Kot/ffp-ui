import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminNavBarComponent } from './layout/admin-nav-bar/admin-nav-bar.component';
import { MaterialModule } from '../_modules/material/material.module';
import { RouterModule } from "@angular/router";
import { OrderTableComponent } from './order/table/order-table.component';
import { NgxTranslateModule } from "../_modules/localization/localization.module";
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { PaginatorDirective } from "../_services/pagination.directive";
import { SalesStatisticComponent } from './dashboard/sales-statistic/sales-statistic.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        AdminNavBarComponent,
        OrderTableComponent,
        AdminHeaderComponent,
        PaginatorDirective,
        SalesStatisticComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        NgxTranslateModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
    ]
})
export class AdminModule {
}
