import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(public http: HttpClient) { }

  getAll$(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/api/v1/dishes/', {});
  }
}
