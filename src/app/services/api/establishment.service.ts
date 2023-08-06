import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';
import { Establishment, EstablishmentRequest, RequestParams } from '@app/models/backend';
import { PageResponse } from '@app/models/backend/page-response';

export interface EstablishmentRequestParams extends RequestParams{
  minLatitude?: number;
  maxLatitude?: number;
  minLongitude?: number;
  maxLongitude?: number;
}


@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private static EstablishmentApiName: string = 'establishment';

  constructor(public http: HttpClient) {
  }

  getAll$(requestParams: EstablishmentRequestParams): Observable<PageResponse<Establishment>> {
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

  create$(request: EstablishmentRequest): Observable<Establishment> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const requestUrl = `${environment.apiUrl}/${EstablishmentService.EstablishmentApiName}/api/v1/establishments/`;
    return this.http.post<any>(requestUrl, request);
  }
}
