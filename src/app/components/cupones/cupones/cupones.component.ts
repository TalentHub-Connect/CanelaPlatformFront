import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cupon } from 'src/app/model/cupon';
import { EmpresaEditar } from 'src/app/model/empresa-editar';
import { CuponesService } from 'src/app/service/cupones.service';
import { EmpresaService } from 'src/app/service/empresa-editar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrls: ['./cupones.component.css']
})
export class CuponesComponent implements OnInit {
  coupons: Cupon[] = [];
  companies: { [key: number]: EmpresaEditar } = {}; // Objeto para almacenar las empresas por companyId

  constructor(private couponService: CuponesService, private router: Router, private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.loadCoupons();
  }

  loadCoupons(): void {
    this.couponService.getAllCoupons().subscribe((data: Cupon[]) => {
      this.coupons = data;
      this.loadCompanyNames();
    });
  }

  loadCompanyNames(): void {
    this.coupons.forEach(coupon => {
      if (!this.companies[coupon.companyId]) { // Verificar si ya se ha cargado la empresa
        this.empresaService.findById(coupon.companyId).subscribe((company: EmpresaEditar) => {
          this.companies[coupon.companyId] = company; // Almacenar la empresa por companyId
        });
      }
    });
  }

  getCompanyName(companyId: number): string {
    const company = this.companies[companyId];
    return company ? company.nameCompany : ''; // Devolver el nombre de la empresa si existe, de lo contrario, una cadena vacía
  }

  viewCoupon(id: number): void {
    this.router.navigate(['canela/detalle-cupon/', id]);
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
