import { Component, OnInit } from '@angular/core';
import { SidenavToggle } from '@app/admin/models/frontend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sidenavToggle: SidenavToggle = {
    collapsed: false,
    screenWidth: 0
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleSidenav(event: SidenavToggle): void {
    this.sidenavToggle.collapsed = event.collapsed;
    this.sidenavToggle.screenWidth = event.screenWidth;
  }
}
