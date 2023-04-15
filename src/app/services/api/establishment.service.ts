import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';
import { RequestParams } from '@app/models/backend';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private static EstablishmentApiName: string = 'establishment';

  constructor(public http: HttpClient) {
  }

  getAll$(requestParams: RequestParams): Observable<any> {
    const params = requestParams ?
      {
        pageIndex: requestParams.pageIndex.toString(),
        pageSize: requestParams.pageSize.toString(),
        sortDirection: requestParams.sortDirection.toString().toUpperCase(),
        sortField: requestParams.sortField.toString(),
      }
      : {};

    return this.http.get<any>(`${environment.apiUrl}/${EstablishmentService.EstablishmentApiName}/api/v1/establishments/`, {params: params});
  }
}
