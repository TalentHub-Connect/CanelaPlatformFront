import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { ServiciosService } from 'src/app/service/servicios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrl: './detalle-servicio.component.css'
})
export class DetalleServicioComponent  implements OnInit {
  servicio: Servicio = new Servicio(0, '', 0, '');

  constructor(
    private servicioService: ServiciosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicioService.getServiceById(id).subscribe(servicio => {
      this.servicio = servicio;
    });
  }

  onSubmit(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'No, cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this.servicioService.updateService(this.servicio.id, this.servicio).subscribe(() => {
          Swal.fire(
            '¡Guardado!',
            'Los cambios han sido guardados.',
            'success'
          );
          this.router.navigate(['/canela/servicios']);
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/canela/servicios']);
  }
}