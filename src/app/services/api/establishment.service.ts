import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';
import { Establishment, RequestParams } from '@app/models/backend';
import { PageResponse } from '@app/models/backend/page-response';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private static EstablishmentApiName: string = 'establishment';

  constructor(public http: HttpClient) {
  }

  getAll$(requestParams: RequestParams): Observable<PageResponse<Establishment>> {
    const params = requestParams ?
      {
        pageIndex: requestParams.pageIndex.toString(),
        pageSize: requestParams.pageSize.toString(),
        sortDirection: requestParams.sortDirection ? requestParams.sortDirection.toString().toUpperCase() : null,
        sortField: requestParams.sortField ? requestParams.sortField.toString() : null,
      }
      : {};

    return this.http.get<any>(`${environment.apiUrl}/${EstablishmentService.EstablishmentApiName}/api/v1/establishments/`, {params: params});
  }
}
