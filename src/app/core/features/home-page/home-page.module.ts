import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { CarouselModule } from '@app/client/components/carousel/carousel.module';
import { DishesModule } from '@app/admin-panel/pages/dishes/dishes.module';
import { GuestHeaderModule } from '@app/core/features/guest-header/guest-header.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    DishesModule,
    GuestHeaderModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
