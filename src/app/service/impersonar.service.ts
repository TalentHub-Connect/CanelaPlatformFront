import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerfilDto } from '../model/perfil-dto';


@Injectable({
  providedIn: 'root'
})
export class ImpersonarService {

  private apiUrl = 'https://soporte-back-qa.up.railway.app/api/support/tickets'; // URL de tu backend

  constructor(private http: HttpClient) { }

  // Función para obtener todos los usuarios desde el backend
  obtenerUsuarios(): Observable<PerfilDto[]> {
    return this.http.get<PerfilDto[]>(`${this.apiUrl}/users`);
  }

  // Función para obtener la información detallada de un usuario por su ID
  obtenerDetalleUsuario(id: number): Observable<PerfilDto> {
    return this.http.get<PerfilDto>(`${this.apiUrl}/users/${id}`);
  }

}
