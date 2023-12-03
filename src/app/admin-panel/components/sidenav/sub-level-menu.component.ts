import { Component, Input } from '@angular/core';
import { SidenavItem } from '@app/admin-panel/models/frontend';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { fadeInOut } from '@app/admin-panel/models/frontend/sidenav/animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-level-menu',
  template: `
    <ul *ngIf="collapsed && data.subItems && data.subItems.length > 0"
        [@submenu]="expanded
            ? { value: 'visible', params: { transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'}}
            : { value: 'hidden', params: { transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '0'}}"
        class="sub-level-nav">
      <li *ngFor="let item of data.subItems" class="sub-level-nav-item">
        <a class="sub-level-nav-link"
           [ngClass]="getActiveClass(item)"
           (click)="handleClick(item)"
           *ngIf="item.subItems?.length > 0">
          <i class="sub-level-link-icon fa fa-circle"></i>
          <span class="sub-level-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
          <i *ngIf="item.subItems && collapsed"
             class="menu-collapse-icon"
             [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'">
          </i>
        </a>
        <a class="sub-level-nav-link"
           *ngIf="!item.subItems || item.subItems?.length === 0"
           [routerLink]="[item.routeLink]"
           routerLinkActive="active-sub-level"
           [routerLinkActiveOptions]="{exact: true}">
          <i class="sub-level-link-icon fa fa-circle"></i>
          <span class="sub-level-link-text" *ngIf="collapsed">{{item.label}}</span>
        </a>
        <div *ngIf="item.subItems?.length > 0">
          <app-sub-level-menu [data]="item"
                              [collapsed]="collapsed"
                              [multiple]="multiple"
                              [expanded]="item.expanded">
          </app-sub-level-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}),
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SubLevelMenuComponent {

  @Input() data: SidenavItem = {
    routeLink: '',
    icon: '',
    label: '',
    subItems: [],
  }

  @Input() collapsed: boolean = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor(private router: Router) {
  }

  handleClick(clickedItem: SidenavItem): void {
    if (!this.multiple) {
      if (!this.data.subItems || this.data.subItems.length === 0) {
        return;
      }

      this.data.subItems.forEach(subItem => {
        subItem.expanded = clickedItem === subItem;
      });
    }

    clickedItem.expanded = !clickedItem.expanded;
  }

  getActiveClass(item: SidenavItem): string {
    return item.expanded && this.router.url.includes(item.routeLink) ? 'active-sub-level' : '';
  }
}
