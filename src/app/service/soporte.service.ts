import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Soporte } from '../model/soporte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoporteService {
  private apiUrl = 'jdbc:mysql://roundhouse.proxy.rlwy.net:29569/supportDb?useSSL=false&serverTimezone=UTC';

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<Soporte[]> {
    return this.http.get<Soporte[]>(this.apiUrl);
  }

  getTicketById(id: number): Observable<Soporte> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Soporte>(url);
  }

  createTicket(ticket: Soporte): Observable<Soporte> {
    return this.http.post<Soporte>(this.apiUrl, ticket);
  }

  updateTicket(ticket: Soporte): Observable<Soporte> {
    const url = `${this.apiUrl}/${ticket.id}`;
    return this.http.put<Soporte>(url, ticket);
  }

  deleteTicket(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}