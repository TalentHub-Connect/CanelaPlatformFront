import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrl: './crear-servicio.component.css'
})
export class CrearServicioComponent {
  servicio: Servicio = new Servicio(0,'',"ACTIVE",false);

  constructor(private route: ActivatedRoute, private router: Router, private crearServicio: CrearServicioComponent) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  
  volverAtras() {
    this.router.navigate(['/planes-canela']);
  }
}
