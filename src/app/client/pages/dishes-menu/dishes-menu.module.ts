import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesMenuRoutingModule } from './dishes-menu-routing.module';
import { DishesMenuComponent } from './dishes-menu.component';
import { DishesModule } from '@app/admin-panel/pages/dishes/dishes.module';
import { InputModule } from '@app/ffd-components';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DishesMenuComponent
  ],
  imports: [
    CommonModule,
    DishesMenuRoutingModule,
    DishesModule,
    InputModule,
    FormsModule
  ]
})
export class DishesMenuModule { }
