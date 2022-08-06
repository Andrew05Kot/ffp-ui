import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from "../../_modules/_models/order.model";
import { Page } from "../../_modules/_models/page.model";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    apiPath = `http://localhost:8080/ordering/api/v1/orders`;

    constructor(private http: HttpClient) {
    }

    getPage$(index: number, size: number): Observable<Page<Order>> {
        let queryParams = new HttpParams()
            .set('index', index.toString())
            .set('size', size.toString());

        return this.http.get<Page<Order>>(this.apiPath + '/page', { params: queryParams });
    }

    getStatistic$(): Observable<Map<String, Number>> {
        return this.http.get<Map<String, Number>>(this.apiPath + '/statistic');
    }
}
