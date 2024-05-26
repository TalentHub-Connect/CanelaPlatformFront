import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupon } from '../model/cupon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CuponesService {
  private apiUrl = environment.URLCUPONES; // Cambia esto según tu configuración

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) {}

  getAllCoupons(): Observable<Cupon[]> {
    return this.http.get<Cupon[]>(this.apiUrl);
  }

  getCouponById(couponId: number): Observable<Cupon> {
    const url = `${this.apiUrl}/${couponId}`;
    return this.http.get<Cupon>(url);
  }

  createCoupon(coupon: Cupon): Observable<Cupon> {
    return this.http.post<Cupon>(this.apiUrl, coupon, this.httpOptions);
  }

  updateCoupon(couponId: number, coupon: Cupon): Observable<Cupon> {
    const url = `${this.apiUrl}/${couponId}`;
    return this.http.put<Cupon>(url, coupon, this.httpOptions);
  }

  deleteCoupon(couponId: number): Observable<void> {
    const url = `${this.apiUrl}/${couponId}`;
    return this.http.delete<void>(url, this.httpOptions);
  }
}
