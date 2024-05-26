import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';

import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrl: './crear-servicio.component.css'
})
export class CrearServicioComponent {
  service: Servicio = new Servicio(0, '', 0, '');
  roles = [
    { value: 1, label: 'Reclutamiento' },
    { value: 2, label: 'Despido' },
    { value: 3, label: 'SST' },
    { value: 4, label: 'Marketing' }
  ];

  constructor(private servicieService: ServiciosService, private router: Router) {}

  onSubmit(): void {
    this.servicieService.createService(this.service).subscribe(
      () => {
        this.router.navigate(['/canela/servicios']);
      },
      error => {
        console.error('Error creating service', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/canela/servicios']);
  }
}