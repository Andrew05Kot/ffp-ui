import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { SalesStatisticComponent } from '@app/admin/pages/dashboard/components/sales-statistic/sales-statistic.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import { CardModule } from '@app/ffd-components/components/card/card.module';

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
    MatNativeDateModule,
    CardModule
  ]
})
export class DashboardModule {
}
