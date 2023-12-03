import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { SidenavComponent } from '@app/admin-panel/components/sidenav/sidenav.component';
import { SubLevelMenuComponent } from '@app/admin-panel/components/sidenav/sub-level-menu.component';


@NgModule({
  declarations: [
    SidenavComponent,
    SubLevelMenuComponent
  ],
  exports: [
    SidenavComponent,
    SubLevelMenuComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule { }
