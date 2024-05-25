import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { ServiciosService } from 'src/app/service/servicios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent  implements OnInit {
  services: Servicio[] = [];

  constructor(private servicieService: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.servicieService.getAllServices().subscribe(
      (data: Servicio[]) => {
        this.services = data;
      },
      error => {
        console.error('Error fetching services', error);
      }
    );
  }

  viewService(id: number): void {
    this.router.navigate([`canela/detalle-cupon/${id}`]);
  }

  confirmDelete(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteService(id);
      }
    });
  }

  deleteService(id: number): void {
    this.servicieService.deleteService(id).subscribe(
      () => {
        Swal.fire(
          'Eliminado!',
          'El servicio ha sido eliminado.',
          'success'
        );
        this.loadServices(); // Reload the list of services
      },
      error => {
        Swal.fire(
          'Error',
          'Hubo un problema al eliminar el servicio.',
          'error'
        );
      }
    );
  }

  addService(): void {
    this.router.navigate(['canela/crear-servicio']);
  }
}