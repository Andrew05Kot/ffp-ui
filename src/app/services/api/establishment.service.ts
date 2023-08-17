import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';
import { Establishment, EstablishmentRequest, RequestParams } from '@app/models/backend';
import { PageResponse } from '@app/models/backend/page-response';
import { ApiService } from '@app/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService implements ApiService {

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
        search: requestParams.search ? encodeURI(requestParams.search) : null
      }
      : {};

    return this.http.get<any>(`${environment.apiUrl}/${EstablishmentService.EstablishmentApiName}/api/v1/establishments/`, {params: params});
  }

  create$(request: EstablishmentRequest): Observable<Establishment> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const requestUrl = `${environment.apiUrl}/${EstablishmentService.EstablishmentApiName}/api/v1/establishments/`;
    return this.http.post<any>(requestUrl, request);
  }

  update$(id: number, request: any): Observable<Establishment> {
    throw new Error('Method not implemented.');
  }
}
