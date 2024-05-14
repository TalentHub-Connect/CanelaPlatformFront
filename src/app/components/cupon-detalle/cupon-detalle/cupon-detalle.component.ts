import { Component } from '@angular/core';

@Component({
  selector: 'app-cupon-detalle',
  templateUrl: './cupon-detalle.component.html',
  styleUrl: './cupon-detalle.component.css'
})
export class CuponDetalleComponent {
 
  editarCupon() {
    // Aquí puedes agregar la lógica para editar el cupón
    console.log('Editar cupón');
  }

  eliminarCupon() {
    // Aquí puedes agregar la lógica para eliminar el cupón
    console.log('Eliminar cupón');
  }
}
