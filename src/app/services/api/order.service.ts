import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';
import { RequestParams } from '@app/models/backend';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private static OrderingApiName: string = 'ordering';

  constructor(private http: HttpClient) {
  }

  getAll$(requestParams: RequestParams): Observable<any> {
    const params = requestParams ?
      {
        pageIndex: requestParams.pageIndex.toString(),
        pageSize: requestParams.pageSize.toString(),
        sortDirection: requestParams.sortDirection.toUpperCase(),
        sortField: requestParams.sortField,
        search: requestParams.search,
      }
      : {};

    return this.http.get<any>(`${environment.apiUrl}/${OrderService.OrderingApiName}/api/v1/orders/`, {params: params});
  }

  getStatistic$(startDate?: string, endDate?: string): Observable<Map<String, Number>> {
    let queryParams = new HttpParams();
    if (startDate && endDate) {
      queryParams = new HttpParams().set('startDate', startDate.toString()).set('endDate', endDate.toString());
    }
    return this.http.get<Map<String, Number>>(`${environment.apiUrl}/${OrderService.OrderingApiName}/api/v1/orders/statistics`, {params: queryParams});
  }
}
