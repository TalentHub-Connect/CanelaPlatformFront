import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilDto } from '../model/perfil-dto';
import { PerfilEditar } from '../model/perfil-editar';
import { environment } from 'src/environments/environment';

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
    return this.http.get<PerfilDto>(`${this.apiUrl}/${username}`);
  }

  findById(id: number): Observable<PerfilDto> {
    return this.http.get<PerfilDto>(`http://localhost:8080/users/{id}`);
  }

  modificarPerfil(
    username: string | null,
    perfil: PerfilEditar
  ): Observable<PerfilEditar> {
    return this.http.put<PerfilEditar>(`${this.apiUrl}/${username}`, perfil);
  }
}
