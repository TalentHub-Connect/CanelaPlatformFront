import { Component, OnInit } from '@angular/core';
import { SlidebarService } from 'src/app/service/slidebar.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css'],
})
export class SlidebarComponent {
  nombreEmpresa: string = '';
  modulos: {
    id: number;
    description: string;
    rolId: number;
    status: string;
  }[] = [];
  roles: string[] = [];

  showAdminCard: boolean = false;
  showSupportCard: boolean = false;
  showMerketingCard: boolean = false;
  showCountCard: boolean = false;

  constructor(private sidebarService: SlidebarService) {}
  /*
  ngOnInit(): void {
    const roleStr = localStorage.getItem('role');
    console.log('Role string from localStorage:', roleStr);

    if (roleStr) {
      this.roles = roleStr.split(', '); // Asume que los roles están separados por comas y espacios
      console.log('Role names:', this.roles);
    } else {
      console.error('Role ID not found in localStorage');
    }

    const hamBurger = document.querySelector(".toggle-btn") as HTMLElement;
    hamBurger.addEventListener("click", () => {
      const sidebar = document.querySelector("#sidebar") as HTMLElement;
      sidebar.classList.toggle("expand");
    });

    const uniqueModules = new Set(); // Usar un Set para asegurar la unicidad
    let pendingRequests = this.roles.length; // Contador para solicitudes pendientes

    this.roles.forEach(role => {
      const roleId = this.getRoleId(role);
      if (roleId !== 0) { // Asegurarse de que el roleId es válido
        this.sidebarService.obtenerModulos(roleId).subscribe(
          (modulos: any[]) => {
            console.log(`Modulos recibidos del API para el rol ${role}:`, modulos);

            const filteredModulos = modulos.filter(modulo => 
              modulo.rolId === roleId && 
              modulo.status === 'ACTIVO' && 
              !uniqueModules.has(modulo.id)
            );

            filteredModulos.forEach(modulo => uniqueModules.add(modulo.id));
            this.modulos = [...this.modulos, ...filteredModulos];
            console.log('Modulos filtrados:', this.modulos);

            pendingRequests--;
            if (pendingRequests === 0) {
              this.setCardVisibility();
            }
          },
          (error) => {
            console.error('Error al obtener los módulos:', error);
            pendingRequests--;
            if (pendingRequests === 0) {
              this.setCardVisibility();
            }
          }
        );
      } else {
        pendingRequests--;
        if (pendingRequests === 0) {
          this.setCardVisibility();
        }
      }
    });
  }
*/
  getRoleId(roleName: string): number {
    const roleMap: { [key: string]: number } = {
      ADMIN: 1,
      SOPORTE: 2,
      MARKETING: 3,
      CUENTAS: 4,
    };
    return roleMap[roleName] || 0;
  }

  setCardVisibility(): void {
    console.log('Setting card visibility based on modulos:', this.modulos);

    this.showAdminCard = this.modulos.some(
      (modulo) => modulo.description === 'ADMIN'
    );
    this.showSupportCard = this.modulos.some(
      (modulo) => modulo.description === 'SOPORTE'
    );
    this.showMerketingCard = this.modulos.some(
      (modulo) => modulo.description === 'MARKETING'
    );
    this.showCountCard = this.modulos.some(
      (modulo) => modulo.description === 'CUENTAS'
    );

    console.log('Card visibility - Admin:', this.showAdminCard);
    console.log('Card visibility - Recruitment:', this.showSupportCard);
    console.log('Card visibility - Dismissal:', this.showMerketingCard);
    console.log('Card visibility - Nomina:', this.showCountCard);
  }

  logout(): void {
    localStorage.clear();
  }
}
