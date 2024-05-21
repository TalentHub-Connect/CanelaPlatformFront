import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SuscripcionDto } from 'src/app/model/suscripcion-dto';
import { EmpresaService } from 'src/app/service/empresa-editar.service';
import { SuscripcioService } from 'src/app/service/suscripcio.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrl: './editar-empresa.component.css',
})
export class EditarEmpresaComponent implements OnInit {
  constructor(
    private router: Router,
    private SuscripcioService: SuscripcioService,
    private route: ActivatedRoute
  ) {}

  entradaid: number | undefined;
  empresa: SuscripcionDto | undefined;
  entradaNombre: string | undefined;
  entradanNIT: number | undefined;
  entradaCorreo: string | undefined;
  entradaTelefono: number | undefined;
  entradaTrabajadores: number | undefined;
  entradaDireccion: string | undefined;
  entradaFechaTerminacion: Date | undefined;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) =>
          this.SuscripcioService.getSuscripcionById(+params.get('id')!)
        )
      )
      .subscribe((SuscripcionDto) => (this.empresa = SuscripcionDto));
  }

  editar() {
    let id = this.entradaid;
    let nombre = this.entradaNombre;
    let NIT = this.entradanNIT;
    let correo = this.entradaCorreo;
    let phone = this.entradaTelefono;
    let maxNumWorker = this.entradaTrabajadores;
    let direccion = this.entradaDireccion;
    let fechaFinal = this.entradaFechaTerminacion;

    if (
      id != undefined &&
      NIT != undefined &&
      nombre != undefined &&
      nombre != '' &&
      correo != undefined &&
      correo != '' &&
      phone != undefined &&
      maxNumWorker != undefined &&
      direccion != '' &&
      direccion != undefined &&
      fechaFinal != undefined
    ) {
      if (this.empresa != undefined) {
        this.empresa.id = id;
        this.empresa.nit = NIT;
        this.empresa.nameCompany = nombre;
        this.empresa.phoneCompany = phone;
        this.empresa.numWorkers = maxNumWorker;
        this.empresa.address = direccion;
        this.empresa.subscriptionEndDate = fechaFinal;
        this.empresa.email = correo;

        this.SuscripcioService.updateSuscripcion(
          this.empresa.id,
          this.empresa
        ).subscribe((result) => {
          this.router.navigate(['canela/suscripciones']);
        });
      }
    }
  }

  volver() {
    this.router.navigate(['canela/suscripciones']);
  }
}
