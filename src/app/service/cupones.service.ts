import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupon } from '../model/cupon';

@Injectable({
  providedIn: 'root'
})
export class CuponesService {
  private baseUrl = 'http://localhost:8080/coupons'; // Ajusta la URL base según sea necesario

  constructor(private http: HttpClient) { }

  getAllCoupons(): Observable<Cupon[]> {
    return this.http.get<Cupon[]>(this.baseUrl);
  }

  getCouponById(id: number): Observable<Cupon> {
    return this.http.get<Cupon>(`${this.baseUrl}/${id}`);
  }

  createCoupon(coupon: Cupon): Observable<Cupon> {
    return this.http.post<Cupon>(this.baseUrl, coupon);
  }

  updateCoupon(id: number, coupon: Cupon): Observable<Cupon> {
    return this.http.put<Cupon>(`${this.baseUrl}/${id}`, coupon);
  }

  deleteCoupon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}