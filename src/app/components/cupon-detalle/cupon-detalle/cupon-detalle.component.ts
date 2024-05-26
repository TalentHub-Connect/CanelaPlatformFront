import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cupon } from 'src/app/model/cupon';
import { CuponesService } from 'src/app/service/cupones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cupon-detalle',
  templateUrl: './cupon-detalle.component.html',
  styleUrls: ['./cupon-detalle.component.css']
})
export class CuponDetalleComponent implements OnInit {
  cupon: Cupon | undefined;
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private cuponesService: CuponesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCoupon();
  }

  getCoupon(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cuponesService.getCouponById(id).subscribe(
      (cupon: Cupon) => this.cupon = cupon,
      (error) => console.error('Error fetching coupon details', error)
    );
  }

  editCoupon(): void {
    this.isEditing = true;
  }

  saveCoupon(): void {
    if (this.cupon) {
      Swal.fire({
        title: '¿Desea modificar el cupón?',
        text: "Los cambios no se podrán revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, guardar cambios',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.cuponesService.updateCoupon(this.cupon!.id, this.cupon!).subscribe(
            (updatedCupon: Cupon) => {
              this.cupon = updatedCupon;
              this.isEditing = false;
              Swal.fire('Éxito', 'Cupón actualizado correctamente', 'success');
            },
            (error) => console.error('Error updating coupon', error)
          );
        }
      });
    }
  }
  goBack(): void {
    this.router.navigate(['/canela/cupones']);
  }
}
