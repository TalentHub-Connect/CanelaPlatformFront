import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaDto } from 'src/app/model/empresa-dto';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrl: './suscripciones.component.css',
})
export class SuscripcionesComponent implements OnInit {
  constructor(
    private router: Router,
    private SuscripcioService: EmpresaService
  ) {}

  suscripciones: EmpresaDto[] | undefined;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  editarSuscripcion(suscripcion: any) {
    this.router.navigate(['canela/empresa/edit/:id']);
  }

  eliminarSuscripcion(suscripcion: any) {}

  nuevaEmpresa() {
    this.router.navigate(['/canela/empresa/add']);
  }
}
