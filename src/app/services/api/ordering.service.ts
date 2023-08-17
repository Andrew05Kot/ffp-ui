import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';
import { Ordering, RequestParams } from '@app/models/backend';
import { ApiService } from '@app/services/api/api.service';
import { PageResponse } from '@app/models/backend/page-response';

@Injectable({
  providedIn: 'root'
})
export class OrderingService implements ApiService {

  private static OrderingApiName: string = 'ordering';

  constructor(private http: HttpClient) {
  }

  getAll$(requestParams: RequestParams): Observable<PageResponse<Ordering>> {
    const params = requestParams ?
      {
        pageIndex: requestParams.pageIndex.toString(),
        pageSize: requestParams.pageSize.toString(),
        sortDirection: requestParams.sortDirection.toUpperCase(),
        sortField: requestParams.sortField
      }
      : {};

    return this.http.get<any>(`${environment.apiUrl}/${OrderingService.OrderingApiName}/api/v1/orders/`, {params: params});
  }

  getStatistic$(startDate?: string, endDate?: string): Observable<Map<String, Number>> {
    let queryParams = new HttpParams();
    if (startDate && endDate) {
      queryParams = new HttpParams().set('startDate', startDate.toString()).set('endDate', endDate.toString());
    }
    return this.http.get<Map<String, Number>>(`${environment.apiUrl}/${OrderingService.OrderingApiName}/api/v1/orders/statistics`, {params: queryParams});
  }

  update$(id: number, request: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  create$(request: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
