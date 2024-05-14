import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuponesService {
  private baseUrl = 'http://localhost:8080/coupons'; // Reemplaza esto con la URL correcta de tu backend

  constructor(private http: HttpClient) { }

  getCupones(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getCupon(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
