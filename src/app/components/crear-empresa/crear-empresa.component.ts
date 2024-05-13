import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/service/empresa.service';
import { EmpresaDto } from 'src/app/model/empresa-dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrl: './crear-empresa.component.css',
})
export class CrearEmpresaComponent {
  constructor(private EmpresaService: EmpresaService, private router: Router) {}
  nit: number | undefined;
  nombre: string | undefined;
  phone: number | undefined;
  maxNumWorker: number | undefined;
  direccion: string | undefined;
  fechaFinal: Date | undefined;
  correo: string | undefined;
  entradaStatus: string | undefined;

  nuevaEmpresa: EmpresaDto | undefined;

  ngOnInit(): void {}

  crearEmpresa() {
    // let NIT = this.nit; TODO
    // let nombre = this.nombre;
    // let phone = this.phone;
    // let maxNumWorker = this.maxNumWorker;
    // let direccion = this.direccion;
    // let fechaFinal = this.fechaFinal;
    // let correo = this.correo;
    // let status = this.entradaStatus;
    // if (
    //   nombre != undefined &&
    //   nombre != ' ' &&
    //   NIT != undefined &&
    //   phone != undefined &&
    //   maxNumWorker != undefined &&
    //   direccion != undefined &&
    //   direccion != ' ' &&
    //   fechaFinal != undefined &&
    //   correo != undefined &&
    //   correo != ' ' &&
    //   status != undefined
    // ) {
    //   let empresaNueva = new EmpresaDto(
    //     NIT,
    //     nombre,
    //     phone,
    //     maxNumWorker,
    //     direccion,
    //     fechaFinal,
    //     correo,
    //     status
    //   );
    //   this.EmpresaService.guardarEmpresa(empresaNueva).subscribe((result) => {
    //     this.router.navigate(['/canela/suscripciones']);
    //   });
    // }
  }
  volver() {
    this.router.navigate(['/canela/suscripciones']);
  }
}
