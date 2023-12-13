import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';
import { RecommendationByUser } from '@app/client/models/backend/recommendation';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(public http: HttpClient) {
  }

  getTop5ItemsByUserId$(userId: string): Observable<RecommendationByUser> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/recommendation/top5/${userId}`);
  }
}
