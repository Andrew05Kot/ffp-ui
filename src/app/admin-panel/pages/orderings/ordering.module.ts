import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderingOverviewComponent } from './ordering-overview/ordering-overview.component';
import { OrderingRoutingModule } from '@app/admin-panel/pages/orderings/ordering-routing.module';
import { PageModule } from '@app/ffd-components/components';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '@app/ffd-components/components/table/table.module';
import { PipesModule } from '@app/ffd-components/pipes/pipes.module';
import { L10nHelperService } from '@app/core/utils/l10n/l10n.helper.service';
import { translations } from '@app/admin-panel/pages/orderings/translations';

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
