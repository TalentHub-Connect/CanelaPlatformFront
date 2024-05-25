import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cupon } from 'src/app/model/cupon';
import { CuponesService } from 'src/app/service/cupones.service';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrl: './cupones.component.css'
})
export class CuponesComponent implements OnInit {
  coupons: Cupon[] = [];

  constructor(private couponService: CuponesService, private router: Router) {}

  ngOnInit(): void {
    this.loadCoupons();
  }

  loadCoupons(): void {
    this.couponService.getAllCoupons().subscribe((data: Cupon[]) => {
      this.coupons = data;
    });
  }

  viewCoupon(id: number): void {
    // Navega a la página de detalles del cupón (puedes ajustar la ruta según sea necesario)
    this.router.navigate(['/coupons', id]);
  }

  deleteCoupon(id: number): void {
    this.couponService.deleteCoupon(id).subscribe(() => {
      this.loadCoupons(); // Recarga la lista de cupones después de eliminar
    });
  }

  goToAddCoupon(): void {
    this.router.navigate(['/canela/crear-cupon']); // Navega a la página para agregar un nuevo cupón
  }
}