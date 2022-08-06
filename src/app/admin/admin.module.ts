import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { MaterialModule } from '../_modules/material/material.module';
import { RouterModule } from "@angular/router";
import { OrderComponent } from './order/order.component';
import { NgxTranslateModule } from "../_modules/localization/localization.module";

@NgModule({
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        AdminNavBarComponent,
        OrderComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        NgxTranslateModule
    ]
})
export class AdminModule {
}
