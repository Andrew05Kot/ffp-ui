import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientHeaderModule } from '@app/client/components/client-header/client-header.module';
import { LayoutModule } from '@app/ffd-components';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ClientHeaderModule,
    LayoutModule
  ]
})
export class ClientModule { }
