import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from './auth/user'; // Asegúrate de que la ruta de importación es correcta

@Injectable({
  providedIn: 'root',
})
export class PermisosService {}
