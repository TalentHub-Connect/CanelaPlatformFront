import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/model/slidebar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css'],
})
export class SlidebarComponent implements  OnInit {
  nombreEmpresa: string= '';
  modulos: { icono: string, nombre: string }[] = [];
  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('role'));
    const hamBurger = document.querySelector(".toggle-btn") as HTMLElement;

    hamBurger.addEventListener("click", () => {
      const sidebar = document.querySelector("#sidebar") as HTMLElement;
      
      sidebar.classList.toggle("expand");
    });
    

    // Obtener los módulos
    this.sidebarService.obtenerModulos().subscribe(
      (modulos: any[]) => {
        this.modulos = modulos;
      },
      (error) => {
        console.error('Error al obtener los módulos:', error);
      }
    );
  }
  logout(): void {
    localStorage.clear()
  }
  role=localStorage.getItem('role');

  showSupportCard: boolean = this.role!.includes('SOPORTE')|| this.role!.includes('ADMIN') ;
  showMarketingCard: boolean = this.role!.includes('MARKETING') || this.role!.includes('ADMIN') ;
  showCountCard: boolean = this.role!.includes('CUENTAS')|| this.role!.includes('ADMIN') ;
  showAdminCard:boolean = this.role!.includes('ADMIN')|| this.role!.includes('ADMIN') ;
}