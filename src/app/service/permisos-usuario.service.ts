import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioPermisoDto } from '../model/usuario-permiso-dto';
import {MarketingDto} from "../model/marketing-dto";

@Injectable({
  providedIn: 'root',
})
export class PermisosUsuarioService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  findAllUsers(): Observable<UsuarioPermisoDto[]> {
    return this.http.get<UsuarioPermisoDto[]>(
      'http://localhost:8083/user/find_all_with_roles'
    );
  }


  saveAllUsers(usuarios: UsuarioPermisoDto[]) {
    return this.http.post<UsuarioPermisoDto[]>("http://localhost:8762/rol/update_all_users_roles", usuarios);

  }
}
