import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FfpIconModule } from "@app/components/icon/ffp-icon.module";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { InputModule } from "@app/shared";
import { MatTooltipModule } from "@angular/material/tooltip";
import { PageModule } from "@app/components";
import { FormsModule } from "@angular/forms";
import { L10nTranslateDirective } from 'angular-l10n';

@NgModule({
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    FfpIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    InputModule,
    MatTooltipModule,
    PageModule,
    FormsModule,
    L10nTranslateDirective
  ],
  providers: [
  ]
})
export class TableModule { }
