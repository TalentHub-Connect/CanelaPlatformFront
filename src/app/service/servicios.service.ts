import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from '../model/servicio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {

  private apiUrl = 'https://canelaaccounmanagermicroservice-qa.up.railway.app/services';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.apiUrl);
  }

  getServiceById(id: number): Observable<Servicio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Servicio>(url);
  }

  createService(service: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.apiUrl, service, this.httpOptions);
  }

  updateService(id: number, service: Servicio): Observable<Servicio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Servicio>(url, service, this.httpOptions);
  }

  deleteService(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
