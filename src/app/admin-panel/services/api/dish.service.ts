import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish, DishRequest, RequestParams } from '@app/admin-panel/models/backend';
import { environment } from '@src/environments/environment.dev';
import { PageResponse } from '@app/admin-panel/models/backend/page-response';
import { ApiService } from '@app/admin-panel/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DishService implements ApiService {

  private static DishApiName: string = 'dish';

  constructor(public http: HttpClient) {
  }

  getAll$(requestParams: RequestParams): Observable<PageResponse<Dish>> {
    const params = requestParams ?
      {
        pageIndex: requestParams?.pageIndex?.toString(),
        pageSize: requestParams?.pageSize?.toString(),
        sortDirection: requestParams?.sortDirection?.toUpperCase(),
        sortField: requestParams?.sortField,
        search: requestParams?.search,
      }
      : {};
    return this.http.get<any>(`${environment.apiUrl}/api/v1/dishes/`, {params: params});
  }

  getAllUnpaged$(): Observable<Array<Dish>> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/dishes/unpaged`);
  }

  getById$(id: string): Observable<Dish> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/dishes/${id}`);
  }

  create$(dish: DishRequest): Observable<Dish> {
    return this.http.post<any>(`${environment.apiUrl}/api/v1/dishes/`, dish);
  }

  update$(id: number, dish: DishRequest): Observable<Dish> {
    return this.http.put<any>(`${environment.apiUrl}/api/v1/dishes/${id}`, dish);
  }
}
