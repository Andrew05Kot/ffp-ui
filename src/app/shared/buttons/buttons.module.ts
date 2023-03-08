import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
  ],
  exports: [
    ButtonModule
  ]
})
export class ButtonsModule { }
