import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaDto } from 'src/app/model/empresa-dto';
import { SuscripcionDto } from 'src/app/model/suscripcion-dto';
import { SuscripcioService } from 'src/app/service/suscripcio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrl: './suscripciones.component.css',
})
export class SuscripcionesComponent implements OnInit {
  constructor(
    private router: Router,
    private SuscripcioService: SuscripcioService
  ) {}

  suscripciones: SuscripcionDto[] | undefined;
  ngOnInit(): void {
    let timerInterval: any;
    Swal.fire({
      title: 'Cargando...',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading(null);
        let timer: any;
        timerInterval = setInterval(() => {}, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
    /*
    this.SuscripcioService.getAllSuscripcion().subscribe(
      (data) => {
        console.log(data);
        this.suscripciones = data;
      },
      (error) => {
        console.error('Ocurrió un error al obtener los planes:', error);
      }
    );
    */
  }

  cargarSuscripciones() {
    this.SuscripcioService.getAllSuscripcion().subscribe({
      next: (data) => {
        console.log('planes cargados', data);
        this.suscripciones = data;
      },
      error: (error) => {
        console.error('Error al cargar planes:', error);
      },
    });
  }

  editarSuscripcion(suscripcion: any) {
    this.router.navigate(['canela/empresa/edit/:id']);
  }

  eliminarSuscripcion(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta suscripción?')) {
      this.SuscripcioService.deleteSuscripcion(id).subscribe(() => {
        this.cargarSuscripciones();
      });
    }
  }

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
