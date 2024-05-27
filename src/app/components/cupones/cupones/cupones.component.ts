import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cupon } from 'src/app/model/cupon';
import { CuponesService } from 'src/app/service/cupones.service';
import { EmpresaService } from 'src/app/service/empresa-editar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrl: './cupones.component.css'
})
export class CuponesComponent implements OnInit {
  coupons: Cupon[] = [];
   empresas: { [key: number]: string } = {};

  constructor(private couponService: CuponesService, private router: Router, private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.loadCoupons();
  }

  loadCoupons(): void {
    this.couponService.getAllCoupons().subscribe((data: Cupon[]) => {
      this.coupons = data;
    });
  }
  loadEmpresas(): void {
    this.empresaService.getEmpresas().subscribe((data: any) => {
      data.forEach((empresa: any) => {
        this.empresas[empresa.id] = empresa.name;
      });
    });
    console.log(this.empresas);
  }

  viewCoupon(id: number): void {
    this.router.navigate(['canela/detalle-cupon/'+ id]);
  }

  confirmDelete(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCoupon(id);
      }
    });
  }

  deleteCoupon(id: number): void {
    this.couponService.deleteCoupon(id).subscribe(() => {
      this.loadCoupons(); // Recarga la lista de cupones después de eliminar
      Swal.fire(
        '¡Eliminado!',
        'El cupón ha sido eliminado.',
        'success'
      );
    });
  }

  goToAddCoupon(): void {
    this.router.navigate(['/canela/crear-cupon']);
  }
}