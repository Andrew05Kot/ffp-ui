import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesOverviewComponent } from '@app/admin-panel/pages/dishes/dishes-overview/dishes-overview.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { PageModule } from '@app/ffd-components/components';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, FormFieldModule, InputModule } from '@app/ffd-components';
import { TableModule } from '@app/ffd-components/components/table/table.module';
import { PipesModule } from '@app/ffd-components/pipes/pipes.module';
import { L10nTranslationModule } from 'angular-l10n';
import { L10nHelperService } from '@app/core/utils/l10n/l10n.helper.service';
import { translations } from '@app/admin-panel/pages/dishes/translations';
import { CreatingEditingDishComponent } from '@app/admin-panel/pages/dishes/creating-editing-dish/creating-editing-dish.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ImageUploadModule } from '@app/ffd-components/components/image-upload/image-upload.module';
import { DishesCardsComponent } from './dishes-cards/dishes-cards.component';
import { CardModule } from '@app/ffd-components/components/card/card.module';
import { CardsContainerModule } from '@app/ffd-components/components/cards-container/cards-container.module';
import { DishCardContentComponent } from './dishes-cards/dish-card-content/dish-card-content.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    DishesOverviewComponent,
    CreatingEditingDishComponent,
    DishesCardsComponent,
    DishCardContentComponent
  ],
  imports: [
    CommonModule,
    PageModule,
    DishesRoutingModule,

    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    FormsModule,
    InputModule,
    TableModule,
    PipesModule,
    L10nTranslationModule,
    MatDialogModule,
    ButtonModule,
    FormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ImageUploadModule,
    CardModule,
    CardsContainerModule,
    MatChipsModule
  ],
  exports: [
    DishesCardsComponent
  ],
  providers: [
    DatePipe
  ]
})
export class DishesModule {
  constructor(l10nHelper: L10nHelperService) {
    l10nHelper.registerL10nProvider('dishes', translations);
  }
}
