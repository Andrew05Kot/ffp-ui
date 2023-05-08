import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '@app/pages/dashboard/page.model';
import { Order } from '@app/pages/dashboard/order.model';
import { environment } from '@src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private static OrderingApiName: string = 'ordering';
  apiPath = `http://localhost:8080/ordering/api/v1/orders`;

  constructor(private http: HttpClient) {
  }

  getPage$(index: number, size: number): Observable<Page<Order>> {
    let queryParams = new HttpParams()
      .set('index', index.toString())
      .set('size', size.toString());

    return this.http.get<Page<Order>>(this.apiPath + '/page', {params: queryParams});
  }

  getStatistic$(startDate?: string, endDate?: string): Observable<Map<String, Number>> {
    let queryParams = new HttpParams();
    if (startDate && endDate) {
      queryParams = new HttpParams().set('startDate', startDate.toString()).set('endDate', endDate.toString());
    }
    return this.http.get<Map<String, Number>>(`${environment.apiUrl}/${OrderService.OrderingApiName}/api/v1/orders/statistics`, {params: queryParams});
  }
}
