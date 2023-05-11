import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { SalesStatisticComponent } from '@app/pages/dashboard/components/sales-statistic/sales-statistic.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    DashboardComponent,
    SalesStatisticComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatNativeDateModule
  ]
})
export class DashboardModule {
}
