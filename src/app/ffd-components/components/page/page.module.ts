import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule {
}
