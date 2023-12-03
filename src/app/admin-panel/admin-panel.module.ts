import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { LayoutModule } from '@app/admin-panel/components/layout/layout.module';
import { SideNavModule } from '@app/admin-panel/components/sidenav/side-nav.module';

@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    LayoutModule,
    SideNavModule,
  ]
})
export class AdminPanelModule {
}
