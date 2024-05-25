import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../model/servicio';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/services';  // Cambia esto si tu backend tiene otra URL
    
  
  
    getAllServices(): Observable<Servicio[]> {
      return this.http.get<Servicio[]>(this.baseUrl);
    }
  
    getServiceById(id: number): Observable<Servicio> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.get<Servicio>(url);
    }
  
    createService(service: Servicio): Observable<Servicio> {
      return this.http.post<Servicio>(this.baseUrl, service);
    }
  
    updateService(id: number, service: Servicio): Observable<Servicio> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.put<Servicio>(url, service);
    }
  
    deleteService(id: number): Observable<void> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<void>(url);
    }
  }


