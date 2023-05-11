import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderingOverviewComponent } from './ordering-overview/ordering-overview.component';
import { OrderingRoutingModule } from '@app/pages/orderings/ordering-routing.module';
import { PageModule } from '@app/components';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { orderingReducer } from '@app/store/ordering/ordering.reducer';
import { OrderingEffect } from '@app/store/ordering/ordering.effect';

@NgModule({
  declarations: [
    OrderingOverviewComponent
  ],
  imports: [
    CommonModule,
    OrderingRoutingModule,
    PageModule,
    StoreModule.forFeature('Ordering', orderingReducer),
    EffectsModule.forFeature(OrderingEffect),

    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [
    DatePipe
  ]
})
export class OrderingModule {
}
