import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../model/servicio';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }

  // Nombre empresa
  obtenerNombreEmpresa(): Observable<string> {
    return this.http.get<string>('URL_DEL_BACKEND/nombre-empresa');
  }

  // Módulos nuevos
  obtenerModulos(roleId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://canelaaccounmanagermicroservice-qa.up.railway.app/services/role/${roleId}`);
  }
  
}