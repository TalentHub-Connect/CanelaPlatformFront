import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupon } from '../model/cupon';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SuscripcionDto } from '../model/suscripcion-dto';

@Injectable({
  providedIn: 'root',
})
export class SuscripcioService {
  private baseUrl = environment.URLSUSCRIPCION;

  constructor(private http: HttpClient) {}

  getAllSuscripcion(): Observable<SuscripcionDto[]> {
    return this.http.get<SuscripcionDto[]>(this.baseUrl);
  }

  getSuscripcionById(id: number): Observable<SuscripcionDto> {
    return this.http.get<SuscripcionDto>(`${this.baseUrl}/${id}`);
  }

  createSuscripcion(suscripcion: SuscripcionDto): Observable<SuscripcionDto> {
    return this.http.post<SuscripcionDto>(this.baseUrl, suscripcion);
  }

  updateSuscripcion(
    id: number,
    suscripcion: SuscripcionDto
  ): Observable<SuscripcionDto> {
    return this.http.put<SuscripcionDto>(`${this.baseUrl}/${id}`, suscripcion);
  }

  deleteSuscripcion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
