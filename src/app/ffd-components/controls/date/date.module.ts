import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";


@NgModule({
  declarations: [DateComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    DateComponent
  ]
})
export class DateModule {
}
