import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(public http: HttpClient) {
  }

  getAll$(): Observable<any> {
    return this.http.get<any>('http://localhost:8084/api/v1/establishments/', {});
  }
}
