import { Component, OnInit } from '@angular/core';
import { SuscripcioService } from 'src/app/service/suscripcio.service';
import { EmpresaDto } from 'src/app/model/empresa-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { SuscripcionDto } from 'src/app/model/suscripcion-dto';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrl: './crear-empresa.component.css',
})
export class CrearEmpresaComponent {
  constructor(
    private SuscripcioService: SuscripcioService,
    private router: Router
  ) {}

  id: number | undefined;
  nameCompany: string | undefined;
  nit: number | undefined;
  address: string | undefined;
  email: string | undefined;
  phoneCompany: number | undefined;
  nameLegalRepresentative: string | undefined;
  idLegalRepresentative: number | undefined;
  linkDate: string | undefined;
  subscriptionEndDate: Date | undefined;
  numWorkers: number | undefined;
  status: string | undefined;

  nuevaSuscripcion: SuscripcionDto | undefined;

  ngOnInit(): void {}

  crearEmpresa() {
    let id = this.id;
    let nombre = this.nameCompany;
    let NIT = this.nit;
    let direccion = this.address;
    let correo = this.email;
    let phone = this.phoneCompany;
    let nameLegalRepresentative = this.nameLegalRepresentative;
    let idLegalRepresentative = this.idLegalRepresentative;
    let linkDate = this.linkDate;
    let subscriptionEndDate = this.subscriptionEndDate;
    let maxNumWorker = this.numWorkers;
    let status = this.status;
    let plan_id;

    if (
      id != undefined &&
      nombre != undefined &&
      nombre != ' ' &&
      NIT != undefined &&
      phone != undefined &&
      maxNumWorker != undefined &&
      direccion != undefined &&
      direccion != ' ' &&
      nameLegalRepresentative != '' &&
      nameLegalRepresentative != undefined &&
      idLegalRepresentative != undefined &&
      linkDate != undefined &&
      subscriptionEndDate != undefined &&
      correo != undefined &&
      correo != ' ' &&
      status != undefined &&
      plan_id != undefined
    ) {
      let nuevaSuscripcion = new SuscripcionDto(
        id,
        nombre,
        NIT,
        direccion,
        correo,
        phone,
        nameLegalRepresentative,
        idLegalRepresentative,
        linkDate,
        subscriptionEndDate,
        maxNumWorker,
        status,
        plan_id
      );
      this.SuscripcioService.createSuscripcion(nuevaSuscripcion).subscribe(
        (result) => {
          this.router.navigate(['/canela/suscripciones']);
        }
      );
    }
  }
  volver() {
    this.router.navigate(['/canela/suscripciones']);
  }
}
