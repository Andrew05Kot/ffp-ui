import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesOverviewComponent } from '@app/pages/dishes/dishes-overview/dishes-overview.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PageModule } from '@app/components';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dishReducer } from '@app/store/dish/dish.reducer';
import { DishEffect } from '@app/store/dish/dish.effect';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { InputModule } from '@app/shared';
import { TableModule } from "@app/components/table/table.module";
import { PipesModule } from '@app/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    DishesOverviewComponent
  ],
  imports: [
    CommonModule,
    PageModule,
    DishesRoutingModule,

    StoreModule.forFeature('Dish', dishReducer),
    EffectsModule.forFeature(DishEffect),

    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    FormsModule,
    InputModule,
    TableModule,
    PipesModule
  ],
  providers: [
    DatePipe
  ]
})
export class DishesModule {
}
