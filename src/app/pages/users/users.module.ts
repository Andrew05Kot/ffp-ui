import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersOverviewComponent } from './users-overview/users-overview.component';
import { TableModule } from '@app/components/table/table.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';
import { L10nHelperService } from '@app/core';
import { L10nTranslationModule } from 'angular-l10n';
import { translations } from '@app/pages/users/translations';

@NgModule({
  declarations: [
    UsersOverviewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    PipesModule,
    L10nTranslationModule
  ]
})
export class UsersModule {
  constructor(l10nHelper: L10nHelperService) {
    l10nHelper.registerL10nProvider('users', translations);
  }
}
