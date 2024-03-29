import { Observable } from 'rxjs';
import { RequestParams } from '@app/admin-panel/models/backend';
import { PageResponse } from '@app/admin-panel/models/backend/page-response';

export interface ApiService {

  getAll$(requestParams: RequestParams): Observable<PageResponse<any>>;

  create$(request: any): Observable<any>;

  update$(id: number, request: any): Observable<any>;
}
