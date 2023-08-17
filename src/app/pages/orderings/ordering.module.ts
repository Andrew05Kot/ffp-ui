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
import { TableModule } from '@app/components/table/table.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';
import { L10nHelperService } from '@app/core/utils/l10n/l10n.helper.service';
import { translations } from '@app/pages/orderings/translations';

@NgModule({
  declarations: [
    OrderingOverviewComponent
  ],
  imports: [
    CommonModule,
    OrderingRoutingModule,
    PageModule,

    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    TableModule,
    PipesModule
  ],
  providers: [
    DatePipe
  ]
})
export class OrderingModule {
  constructor(l10nHelper: L10nHelperService) {
    l10nHelper.registerL10nProvider('ordering', translations);
  }
}
