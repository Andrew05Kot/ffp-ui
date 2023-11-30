import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish, DishRequest, RequestParams } from '@app/admin/models/backend';
import { environment } from '@src/environments/environment.dev';
import { PageResponse } from '@app/admin/models/backend/page-response';
import { ApiService } from '@app/admin/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService {


  constructor(public http: HttpClient) {
  }

  get$(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/demo/`);
  }

  getHello$(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/demo/hello2`);
  }
}
