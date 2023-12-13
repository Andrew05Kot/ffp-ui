import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule
  ],
  exports: [
    CarouselComponent
  ],
})
export class CarouselModule { }
