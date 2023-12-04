import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientHeaderModule } from '@app/client/components/client-header/client-header.module';
import { LayoutModule } from '@app/ffd-components';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';

@NgModule({
  declarations: [
    ClientComponent,
    DishesListComponent
  ],
  exports: [
    DishesListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ClientHeaderModule,
    LayoutModule
  ]
})
export class ClientModule { }
