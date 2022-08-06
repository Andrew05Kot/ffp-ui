import { Component, OnInit } from '@angular/core';

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    opened = true;

    constructor() {
    }

    ngOnInit(): void {
    }

}
