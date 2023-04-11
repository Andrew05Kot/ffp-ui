import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';
import { EstablishmentParams } from '@app/models/backend';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private static EstablishmentApiName: string = 'establishment';

  constructor(public http: HttpClient) {
  }

  getAll$(establishmentParams: EstablishmentParams): Observable<any> {
    const params = establishmentParams ?
      {
        pageIndex: establishmentParams.pageIndex.toString(),
        pageSize: establishmentParams.pageSize.toString(),
        sortDirection: establishmentParams.sortDirection.toString().toUpperCase(),
        sortField: establishmentParams.sortField.toString(),
      }
      : {};

    console.log('params >> ', params)

    return this.http.get<any>(`${environment.apiUrl}/${EstablishmentService.EstablishmentApiName}/api/v1/establishments/`, {params: params});
  }
}
