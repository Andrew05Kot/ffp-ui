import {Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TempAuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // request = request.clone({
    //   setHeaders: {
    //     'Authorization' : `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJuLTVlVTFudlRKaHowdy1PUk1EZVgtQmVGVi1IUnFPTEpmeWozQWY2dGU4In0.eyJleHAiOjE3MDExMDg4MjIsImlhdCI6MTcwMTEwODUyMiwianRpIjoiYmZmMjE0OGQtYmRjZC00ZGQyLTk4Y2ItZWU2Njk5ZmMzMWM0IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9mZmQtYXBwIiwic3ViIjoiMjBhMGUyNjgtNWY0OS00ZTNhLWIwNzQtYjA0ZGNiNmQ3YjM1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZmZwLWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiI5ZTM0MjgwMy04MWZjLTQ3NjktOWU0Yi04NjFhZTEyMzBkOWIiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVzb3VyY2VfYWNjZXNzIjp7ImZmcC1jbGllbnQiOnsicm9sZXMiOlsiRkZEX0FETUlOIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiOWUzNDI4MDMtODFmYy00NzY5LTllNGItODYxYWUxMjMwZDliIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJUZXN0IEFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiVGVzdCIsImZhbWlseV9uYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.YQLd_MaZYV_aqf4w3DG2o4_uyrAm0s4FwdHRQBMIJTbeJsBNHnv7CENZq1H4s7Q94ggp347e9eEiRcb06w4dB9uIKRsUf1Er72ABmgf4j9M7oPEdCCYhJJUPW6PvvIr9YcrH3LMiU2laKju-txTZAz8_tWidgQKTwtkl_4y1rA_eWzwnrbX4TMitVptOKVA2M2ck4UMRl8InlEDZRejOK5Kb5aybVQybmVXS78grPQNSE9LtPrOpczmAn8civZh4_IAy_uqZYEZXZUFNBbrAQuoZgB9cDyLwqNRfL4syNXD5A-jmH_55b54rG8u_165-RTifdIYFORNOP1cBQN6F0w`,
    //   }
    // });

    return next.handle(request);
  }
}
