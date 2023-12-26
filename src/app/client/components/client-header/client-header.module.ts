import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHeaderComponent } from './client-header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    ClientHeaderComponent
  ],
  exports: [
    ClientHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class ClientHeaderModule { }
