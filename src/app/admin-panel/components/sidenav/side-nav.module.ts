import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '@app/admin-panel/components/sidenav/sidenav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SubLevelMenuComponent } from '@app/admin-panel/components/sidenav/sub-level-menu.component';

@NgModule({
  declarations: [
    SidenavComponent,
    SubLevelMenuComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    SidenavComponent
  ]
})
export class SideNavModule { }
