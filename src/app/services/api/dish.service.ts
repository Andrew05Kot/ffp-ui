import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestParams } from '@app/models/backend';
import { environment } from '@src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private static DishApiName: string = 'dish';

  constructor(public http: HttpClient) {
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

    return this.http.get<any>(`${environment.apiUrl}/${DishService.DishApiName}/api/v1/dishes/`, {params: params});
  }
}
