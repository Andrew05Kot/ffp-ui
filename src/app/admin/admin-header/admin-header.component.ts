import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {

    @Output() onToggleSideNav: EventEmitter<boolean> = new EventEmitter()
    opened = false;

    toggleSideNav(): void {
        this.opened = !this.opened;
        this.onToggleSideNav.next(this.opened);
    }

}
