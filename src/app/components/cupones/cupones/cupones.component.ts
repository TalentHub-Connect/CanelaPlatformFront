import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cupon } from 'src/app/model/cupon';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrl: './cupones.component.css'
})
export class CuponesComponent implements OnInit {
  cupones: Cupon[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Cupon[]>('http://localhost:8080/coupons')
      .subscribe(cupones => {
        this.cupones = cupones;
      });
  }
}