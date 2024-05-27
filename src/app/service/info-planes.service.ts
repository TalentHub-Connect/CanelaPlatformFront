import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanesDto } from '../model/planes-dto';

@Injectable({
  providedIn: 'root',
})
export class InfoPlanesService {
  private apiUrl =
    'https://canelaaccounmanagermicroservice-qa.up.railway.app/plan/list';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  guardaPlan(nuevoPlan: PlanesDto): Observable<PlanesDto> {
    console.log(nuevoPlan);
    return this.http.post<PlanesDto>(
      `https://canelaaccounmanagermicroservice-qa.up.railway.app/plan`,
      nuevoPlan,
      this.httpOptions
    );
  }

  modificarPlan(plan: PlanesDto): Observable<PlanesDto> {
    return this.http.put<PlanesDto>(
      `https://canelaaccounmanagermicroservice-qa.up.railway.app/plan/{id}`,
      plan,
      this.httpOptions
    );
  }

  findById(id: number) {
    return this.http.get<PlanesDto>(
      `https://canelaaccounmanagermicroservice-qa.up.railway.app/plans/` + id
    );
  }

  findAll(): Observable<PlanesDto[]> {
    return this.http.get<PlanesDto[]>(`http://localhost:8080/plans`);
  }

  getPlanes(): Observable<PlanesDto[]> {
    return this.http.get<PlanesDto[]>(this.apiUrl, this.httpOptions);
  }
}
