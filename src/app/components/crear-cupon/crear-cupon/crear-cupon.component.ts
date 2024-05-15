import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cupon } from 'src/app/model/cupon';
import { CuponesService } from 'src/app/service/cupones.service';

@Component({
  selector: 'app-crear-cupon',
  templateUrl: './crear-cupon.component.html',
  styleUrl: './crear-cupon.component.css'
})
export class CrearCuponComponent implements OnInit {
  coupon: Cupon = {
    id: 0,
    name: '',
    description: '',
    expirationdate: '',
    status: '',
    companyId: 0,
    discountrate: 0
  };

  constructor(private cuponesService: CuponesService, private router: Router) { }

  ngOnInit(): void {
  }

  createCoupon(): void {
    this.cuponesService.createCoupon(this.coupon).subscribe(() => {
      console.log('Cupón creado exitosamente');
      this.router.navigate(['/canela/cupones']);
    }, error => {
      console.error('Error al crear el cupón', error);
    });
  }
}