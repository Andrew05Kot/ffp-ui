import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EstablishmentRoutingModule } from './establishment-routing.module';
import {
  EstablishmentOverviewComponent
} from '@app/pages/establishment/establishment-overview/establishment-overview.component';
import { PageModule } from '@app/components';
import { StoreModule } from '@ngrx/store';
import { establishmentReducer } from '@app/store/establishment/establishment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EstablishmentEffect } from '@app/store/establishment/establishment.effect';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { EstablishmentsMapComponent } from './establishments-map/establishments-map.component';
import { EstablishmentsListComponent } from './establishments-list/establishments-list.component';


@NgModule({
  declarations: [
    EstablishmentOverviewComponent,
    EstablishmentsMapComponent,
    EstablishmentsListComponent
  ],
  imports: [
    CommonModule,
    PageModule,
    EstablishmentRoutingModule,
    StoreModule.forFeature('Establishment', establishmentReducer),
    EffectsModule.forFeature(EstablishmentEffect),

    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [
    DatePipe
  ]
})
export class EstablishmentModule {
}
