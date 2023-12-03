import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule, ControlsModule, IndicatorsModule } from "@app/ffd-components";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    ButtonsModule,
    CommonModule,
    ControlsModule,
    IndicatorsModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
