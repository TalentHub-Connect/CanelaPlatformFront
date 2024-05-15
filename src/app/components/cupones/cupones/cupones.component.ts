import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  selectedCoupon: Cupon | null = null;

  constructor(private cuponesService: CuponesService) { }

  ngOnInit(): void {
    this.getAllCoupons();
  }

  getAllCoupons(): void {
    this.cuponesService.getAllCoupons().subscribe(
      (data: Cupon[]) => {
        this.coupons = data;
      },
      (error) => {
        console.error('Error fetching coupons', error);
      }
    );
  }

  selectCoupon(coupon: Cupon): void {
    this.selectedCoupon = coupon;
  }

  createCoupon(coupon: Cupon): void {
    this.cuponesService.createCoupon(coupon).subscribe(
      (data: Cupon) => {
        this.coupons.push(data);
      },
      (error) => {
        console.error('Error creating coupon', error);
      }
    );
  }

  updateCoupon(coupon: Cupon): void {
    if (coupon.id) {
      this.cuponesService.updateCoupon(coupon.id, coupon).subscribe(
        (data: Cupon) => {
          const index = this.coupons.findIndex(c => c.id === coupon.id);
          if (index !== -1) {
            this.coupons[index] = data;
          }
        },
        (error) => {
          console.error('Error updating coupon', error);
        }
      );
    }
  }

  deleteCoupon(id: number): void {
    this.cuponesService.deleteCoupon(id).subscribe(
      () => {
        this.coupons = this.coupons.filter(c => c.id !== id);
      },
      (error) => {
        console.error('Error deleting coupon', error);
      }
    );
  }
}