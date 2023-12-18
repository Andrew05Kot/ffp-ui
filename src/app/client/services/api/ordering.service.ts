import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';
import { Ordering, RequestParams } from '@app/admin-panel/models/backend';
import { ApiService } from '@app/admin-panel/services/api/api.service';
import { PageResponse } from '@app/admin-panel/models/backend/page-response';
import { ClientModule } from '@app/client/client.module';

@Injectable({
  providedIn: ClientModule,
})
export class OrderingService implements ApiService {

  private static OrderingApiName: string = 'ordering';

  constructor(private http: HttpClient) {
  }

  getAllByUser$(userId: string): Observable<PageResponse<Ordering>> {
    return this.http.get<any>(`${environment.apiUrl}/${OrderingService.OrderingApiName}/api/v1/orders/user/${userId}`);
  }


  update$(id: number, request: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  create$(request: any): Observable<any> {
    throw new Error('Method not implemented.');
  }

  getAll$(requestParams: RequestParams): Observable<PageResponse<any>> {
    throw new Error('Method not implemented.');
  }
}
