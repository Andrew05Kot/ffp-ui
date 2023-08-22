import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish, RequestParams } from '@app/models/backend';
import { environment } from '@src/environments/environment.dev';
import { PageResponse } from '@app/models/backend/page-response';
import { ApiService } from '@app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements ApiService {

  private static UserApiName: string = 'user';

  constructor(public http: HttpClient) {
  }

  getAll$(requestParams: RequestParams): Observable<PageResponse<Dish>> {
    const params = requestParams ?
      {
        pageIndex: requestParams.pageIndex.toString(),
        pageSize: requestParams.pageSize.toString(),
        sortDirection: requestParams.sortDirection.toUpperCase(),
        sortField: requestParams.sortField,
        search: requestParams.search,
      }
      : {};
    return this.http.get<any>(`${environment.apiUrl}/${UserService.UserApiName}/api/v1/users/`, {params: params});
  }

  create$(request: any): Observable<any> {
    return undefined;
  }

  update$(id: number, request: any): Observable<any> {
    return undefined;
  }
}
