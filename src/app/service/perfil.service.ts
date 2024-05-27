import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilDto } from '../model/perfil-dto';
import { PerfilEditar } from '../model/perfil-editar';
import { environment } from 'src/environments/environment';
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  private apiUrl = environment.URLPERFIL;

  constructor(private http: HttpClient) {}

  getAllPerfil(): Observable<PerfilDto[]> {
    return this.http.get<PerfilDto[]>(this.apiUrl);
  }

  findByUsername(username: string) {
    return this.http.get<Employee>(`https://empresasnominamicroservice-qa.up.railway.app/employee/find_by_username/${username}`);
  }

  findById(id: number): Observable<PerfilDto> {
    return this.http.get<PerfilDto>(`http://localhost:8080/users/${id}`);
  }

  modificarPerfil(
    perfil: Employee,
    id : number
  ): Observable<Employee> {
    return this.http.put<Employee>(`https://empresasnominamicroservice-qa.up.railway.app/employee/updateEmployee/${id}`, perfil);
  }
}
