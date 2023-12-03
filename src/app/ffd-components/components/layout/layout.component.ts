import { Component, Input } from '@angular/core';
import { SidenavToggle } from '@app/admin-panel/models/frontend';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @Input() sidenavToggle: SidenavToggle = {
    collapsed: false,
    screenWidth: 0
  }

  getClass(): string {
    let styleClass = '';
    if (this.sidenavToggle.collapsed && this.sidenavToggle.screenWidth > 768) {
      styleClass = 'layout-trimmed';
    } else  if (this.sidenavToggle.collapsed && this.sidenavToggle.screenWidth > 768) {
      styleClass = 'layout-md-screen';
    }
    return styleClass;
  }
}
