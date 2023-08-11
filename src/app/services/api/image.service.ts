import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private static ImageApiName: string = 'image';

  constructor(private http: HttpClient) {
  }

  uploadImage$(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(`${environment.apiUrl}/${ImageService.ImageApiName}/api/v1/image/upload/`, formData);
  }
}
