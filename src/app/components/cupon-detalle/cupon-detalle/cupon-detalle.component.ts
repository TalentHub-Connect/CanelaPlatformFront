import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuponesService } from 'src/app/service/cupones.service';

@Component({
  selector: 'app-cupon-detalle',
  templateUrl: './cupon-detalle.component.html',
  styleUrl: './cupon-detalle.component.css'
})
export class CuponDetalleComponent {
  cupon: any; // Variable para almacenar los detalles del cupón
  cuponId: number | undefined; // Variable para almacenar el ID del cupón obtenido de la URL

  constructor(
    private route: ActivatedRoute,
    private cuponesService: CuponesService
  ) { }

  ngOnInit(): void {
    // Obtenemos el ID del cupón de la URL
    this.route.params.subscribe(params => {
      this.cuponId = params['id'];
      // Verificamos que this.cuponId no sea undefined antes de llamar a la función
      if (this.cuponId !== undefined) {
        this.getCuponDetalle(this.cuponId);
      }
    });
  }
  

  // Función para obtener los detalles del cupón por su ID
  getCuponDetalle(id: number): void {
    this.cuponesService.getCupon(id).subscribe(
      data => {
        this.cupon = data; // Almacenamos los detalles del cupón en la variable cupon
      },
      error => {
        console.log(error);
      }
    );
  }

  // Función para editar el cupón
  editarCupon(): void {
    // Aquí puedes agregar la lógica para editar el cupón
    console.log('Editar cupón');
  }

  // Función para eliminar el cupón
  eliminarCupon(): void {
    // Aquí puedes agregar la lógica para eliminar el cupón
    console.log('Eliminar cupón');
  }
}
