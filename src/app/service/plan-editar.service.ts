import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanEditar } from '../model/plan-editar';

@Injectable({
  providedIn: 'root',
})
export class InfoPlanesService {
  private apiUrl = 'http://localhost:8080/plans';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  guardaPlan(nuevoPlan: PlanEditar): Observable<PlanEditar> {
    console.log(nuevoPlan);
    return this.http.post<PlanEditar>(
      `${this.apiUrl}/add`,
      nuevoPlan,
      this.httpOptions
    );
  }

  modificarPlan(plan: PlanEditar): Observable<PlanEditar> {
    return this.http.put<PlanEditar>(
      `https://canelaaccounmanagermicroservice-qa.up.railway.app/plans/{id}`,
      plan,
      this.httpOptions
    );
  }

  findById(id: number) {
    return this.http.get<PlanEditar>(`https://canelaaccounmanagermicroservice-qa.up.railway.app/plans/{id}`);
  }

  findAll(): Observable<PlanEditar[]> {
    return this.http.get<PlanEditar[]>(`https://canelaaccounmanagermicroservice-qa.up.railway.app/plans`);
  }

  getPlanes(): Observable<PlanEditar[]> {
    return this.http.get<PlanEditar[]>(this.apiUrl, this.httpOptions);
  }
}
