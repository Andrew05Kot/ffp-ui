import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule } from "@app/shared";


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    ButtonsModule,
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
