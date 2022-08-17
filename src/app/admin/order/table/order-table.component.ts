import { Component } from '@angular/core';
import { OrderService } from "../../../_services/api/order.service";
import { Order } from "../../../_models/order.model";
import { MatTableDataSource } from "@angular/material/table";
import { Page } from "../../../_models/page.model";
import { PageEvent } from "@angular/material/paginator";

@Component({
    selector: 'app-order',
    templateUrl: './order-table.component.html',
    styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent {

    orders = new MatTableDataSource<Order>();
    page: Page<Order> | undefined;
    pageEvent: PageEvent;
    displayedColumns = ['createdDate', 'totalPrice', 'cardName', 'cardNumber', 'paymentMethod'];

    constructor(private orderService: OrderService) {
        this.pageEvent = this.getDefaultPageEvent();
        this.onPageEvent(this.pageEvent);
    }

    onPageEvent(event: PageEvent): void {
        this.orderService.getPage$(event.pageIndex, event.pageSize).subscribe((page: Page<Order>) => {
            if (page?.items) {
                this.page = page;
                this.orders.data = page.items;
            }
        });
    }

    private getDefaultPageEvent() {
        const pageEvent = new PageEvent();
        pageEvent.pageSize = 15;
        pageEvent.pageIndex = 0;
        return pageEvent;
    }

}
