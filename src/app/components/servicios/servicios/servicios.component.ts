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
        console.log(this.services);
      },
      error => {
        console.error('Error fetching services', error);
      }
    );
  }

  viewService(id: number): void {
    this.router.navigate([`canela/detalle-servicio/` + id]);
  }

 

  addService(): void {
    this.router.navigate(['canela/crear-servicio']);
  }

  toggleEstatus(service: Servicio): void {
    const newEstatus = service.estatus === 'ACTIVO' ? 'INACTIVO' : 'ACTIVO';
    const updatedService = { ...service, estatus: newEstatus };
    
    this.servicieService.updateService(service.id, updatedService).subscribe(
      (response) => {
        console.log('Service status updated successfully', response);
        service.estatus = newEstatus;
        Swal.fire(
          'Actualizado!',
          `El estatus del servicio ha sido actualizado a ${newEstatus}.`,
          'success'
        );
      },
      error => {
        console.error('Error updating service status', error);
        Swal.fire(
          'Error',
          'Hubo un problema al actualizar el estatus del servicio.',
          'error'
        );
      }
    );
  }
}