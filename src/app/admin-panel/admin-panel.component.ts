import { Component } from '@angular/core';
import { SidenavToggle } from '@app/admin-panel/models/frontend';

@Component({
  selector: 'app-admin',
  template: `
    <app-sidenav (onToggleSidenav)="onToggleSidenav($event)"></app-sidenav>
    <app-layout [sidenavToggle]="sidenavToggle">
      <router-outlet></router-outlet>
    </app-layout>
  `,
})
export class AdminPanelComponent {

  sidenavToggle: SidenavToggle = {
    collapsed: false,
    screenWidth: 0
  };

  onToggleSidenav(event: SidenavToggle): void {
    this.sidenavToggle.collapsed = event.collapsed;
    this.sidenavToggle.screenWidth = event.screenWidth;
  }
}
