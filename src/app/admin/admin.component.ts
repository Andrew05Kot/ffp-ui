import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    opened = false;
    temporaryDisabled: boolean = false;
    @ViewChild('sidenav') sidenav: any;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggle() {
        this.temporaryDisabled = true;
        this.sidenav.toggle();

        setTimeout(() => {
            this.temporaryDisabled = false;
        }, 100);
    }

}
