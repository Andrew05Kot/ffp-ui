import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderingRoutingModule } from './ordering-routing.module';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';
import { CardModule } from '@app/ffd-components/components/card/card.module';
import { PipesModule } from '@app/ffd-components/pipes/pipes.module';


@NgModule({
  declarations: [
    OrdersHistoryComponent,
    OrderListItemComponent
  ],
  imports: [
    CommonModule,
    OrderingRoutingModule,
    CardModule,
    PipesModule
  ]
})
export class OrderingModule { }
