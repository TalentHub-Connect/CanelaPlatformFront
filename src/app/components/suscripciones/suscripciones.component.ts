import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaDto } from 'src/app/model/empresa-dto';
import { EmpresaService } from 'src/app/service/empresa.service';
import Swal from "sweetalert2";

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
    let timerInterval: any;
    Swal.fire({
      title: "Cargando...",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading(null);
        let timer: any;
        timerInterval = setInterval(() => {
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

    this.SuscripcioService.getEmpresas().subscribe(
      (data) => {
        console.log(data);
        this.suscripciones = data;
      },
      (error) => {
        console.error('Ocurrió un error al obtener los planes:', error);
      }
    );
  }

  editarSuscripcion(suscripcion: any) {
    this.router.navigate(['canela/empresa/edit/:id']);
  }

  eliminarSuscripcion(suscripcion: any) {}

  nuevaEmpresa() {
    this.router.navigate(['/canela/empresa/add']);
  }

  verSucripcion(suscripcion: any) {
    this.router.navigate(['/canela/empresa/ver:id']);
  }
  facturas() {
    this.router.navigate(['/canela/empresa/ver:id']);
  }
}
