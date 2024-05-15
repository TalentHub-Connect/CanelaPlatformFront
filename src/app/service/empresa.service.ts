import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaDto } from '../model/empresa-dto';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
  guardarEmpresa(nuevaEmpresa: EmpresaDto): Observable<EmpresaDto> {
    return this.http.post<EmpresaDto>(
      'http://localhost:8080/companies',
      nuevaEmpresa,
      this.httpOptions
    );
  }
  modificarEmpresa(empresa: EmpresaDto): Observable<EmpresaDto> {
    return this.http.put<EmpresaDto>(
      `http://localhost:8080/companies/edit`,
      empresa,
      this.httpOptions
    );
  }
  findById(id: number) {
    return this.http.get<EmpresaDto>(`http://localhost:8080/companies/{id}`);
  }


  getEmpresas(): Observable<EmpresaDto[]> {
    return this.http.get<EmpresaDto[]>('http://localhost:8762/company/list', this.httpOptions);
  }
}
