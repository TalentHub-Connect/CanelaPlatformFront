import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from './auth/user';
import {Employee} from "../../model/employee"; // Asegúrate de que la ruta de importación es correcta

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Método para crear un usuario con un token Bearer
  createUser(user: User, role: string, token: string): Observable<any> {
    const url = `${environment.authURL}/canela/${role}`;

    // Crear los headers necesarios para la autorización
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(url, user, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  getUserRole(email: String | null) {
    const url = `${environment.URLUSUARIOS}`;
    return this.http.post<User>(url, email);
  }

  agregarUsuario(usuario: User): Observable<any> {
    return this.http.post<any>(`https://canelausermanagementmicroservice-qa.up.railway.app/user/save`, usuario);
  }

  agregarEmpleado(empleado: Employee) {
    //return this.http.post<any>(`https://empresasnominamicroservice-qa.up.railway.app/employee/createEmployee`, empleado);
    return this.http.post<any>(`http://localhost:8080/employee/createEmployee`, empleado);

  }
}
