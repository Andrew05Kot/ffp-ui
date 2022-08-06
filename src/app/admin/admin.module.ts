import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { MaterialModule } from '../_modules/material/material.module';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        AdminNavBarComponent,
        AdminSideBarComponent
    ],
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule
	]
})
export class AdminModule { }
