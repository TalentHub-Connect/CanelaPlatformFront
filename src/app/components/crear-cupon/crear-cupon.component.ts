import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cupon } from 'src/app/model/cupon';
import { CuponesService } from 'src/app/service/cupones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cupon',
  templateUrl: './crear-cupon.component.html',
  styleUrl: './crear-cupon.component.css'
})
export class CrearCuponComponent {
  coupon: Cupon = {
    id: 0,
    name: '',
    description: '',
    expirationdate: '',
    status: 'ACTIVO',
    companyId: 0,
    discountrate: 0
  };

  constructor(private cuponesService: CuponesService, private router: Router) {}

  onSubmit(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Deseas crear este cupón?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4CAF50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, crear',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cuponesService.createCoupon(this.coupon).subscribe(() => {
          Swal.fire(
            '¡Creado!',
            'El cupón ha sido creado.',
            'success'
          );
          this.router.navigate(['/canela/cupones']);
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/canela/cupones']);
  }
}