import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Plan } from '../shared/model/Entities/plan';

@Injectable({
  providedIn: 'root',
})
export class PlanesCanelaService {
  private apiUrl = `${environment.URLPLANES}/plan`;
  constructor(private http: HttpClient) {}

  obtenerPlanes(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${this.apiUrl}/list`);
  }

  obtenerPlanPorId(id: number): Observable<Plan> {
    return this.http.get<Plan>(`${this.apiUrl}/${id}`);
  }

  agregarPlan(nuevoPlan: Plan): Observable<Plan> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Plan>(this.apiUrl, nuevoPlan);
  }

  editarPlan(planEditado: Plan): Observable<Plan> {
    return this.http.put<Plan>(`${this.apiUrl}/${planEditado.id}`, planEditado);
  }

  eliminarPlan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
