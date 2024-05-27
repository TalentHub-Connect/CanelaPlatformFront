import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';
import { SlidebarService } from 'src/app/service/slidebar.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css'],
})
export class SlidebarComponent implements OnInit {
  nombreEmpresa: string = '';

  roles: string[] = [];

  showAdminCard: boolean = false;
  showSupportCard: boolean = false;
  showMarketingCard: boolean = false;
  showCountCard: boolean = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    const roleStr = localStorage.getItem('role');
    console.log('Role string from localStorage:', roleStr);

    if (roleStr) {
      this.roles = roleStr.split(', '); // Asume que los roles están separados por comas y espacios
      console.log('Role names:', this.roles);
    } else {
      console.error('Role ID not found in localStorage');
    }

    const hamBurger = document.querySelector('.toggle-btn') as HTMLElement;
    hamBurger.addEventListener('click', () => {
      const sidebar = document.querySelector('#sidebar') as HTMLElement;
      sidebar.classList.toggle('expand');
    });

    this.updateSidebarVisibility();
  }

  getRoleId(roleName: string): number {
    const roleMap: { [key: string]: number } = {
      ADMIN: 1,
      SOPORTE: 7,
      MARKETING: 8,
      CUENTAS: 9,
    };
    return roleMap[roleName] || 0;
  }

  updateSidebarVisibility(): void {
    this.showAdminCard = this.roles.includes('ADMIN_CANELA');
    this.showSupportCard =
      this.roles.includes('SOPORTE') || this.roles.includes('ADMIN_CANELA');
    this.showMarketingCard =
      this.roles.includes('MARKETING') || this.roles.includes('ADMIN_CANELA');
    this.showCountCard =
      this.roles.includes('CUENTAS') || this.roles.includes('ADMIN_CANELA');
  }

  logout(): void {
    localStorage.clear();
  }
}
