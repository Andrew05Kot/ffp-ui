import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EstablishmentRoutingModule } from './establishment-routing.module';
import {
  EstablishmentOverviewComponent
} from '@app/admin-panel/pages/establishment/establishment-overview/establishment-overview.component';
import { PageModule } from '@app/ffd-components/components';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { EstablishmentsMapComponent } from './establishments-map/establishments-map.component';
import { EstablishmentsListComponent } from './establishments-list/establishments-list.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PipesModule } from '@app/ffd-components/pipes/pipes.module';
import { TableModule } from '@app/ffd-components/components/table/table.module';
import { L10nHelperService } from '@app/core/utils/l10n/l10n.helper.service';
import { translations } from '@app/admin-panel/pages/establishment/translations';
import {
  CreatingEditingEstablishmentComponent
} from './creating-editing-establishment/creating-editing-establishment.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from '@app/ffd-components/components/image-upload/image-upload.module';

@NgModule({
  declarations: [
    EstablishmentOverviewComponent,
    EstablishmentsMapComponent,
    EstablishmentsListComponent,
    CreatingEditingEstablishmentComponent
  ],
  imports: [
    CommonModule,
    PageModule,
    EstablishmentRoutingModule,

    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    LeafletModule,
    MatTooltipModule,
    PipesModule,
    TableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    ImageUploadModule
  ],
  providers: [
    DatePipe
  ]
})
export class EstablishmentModule {
  constructor(l10nHelper: L10nHelperService) {
    l10nHelper.registerL10nProvider('establishments', translations);
  }
}
