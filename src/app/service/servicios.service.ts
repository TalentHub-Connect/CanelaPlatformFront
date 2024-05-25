import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from '../model/servicio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private apiUrl = 'https://modulocuentasservicios-qa.up.railway.app/services';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getServicio(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.apiUrl, this.httpOptions);
  }
}
