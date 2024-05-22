import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../app/services/auth.service';
import { UtilService } from '../../../app/services/util.services';
import { UserService } from 'src/app/shared/model/user.service';
import { User } from 'src/app/shared/model/auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private utilService: UtilService,
    private UserService: UserService
  ) {}

  username: string = '';
  password: string = '';
  error: boolean = false;
  error_message: string = 'Error de conexión';
  returnUrl: string = '/';
  usuario: User | undefined;
  error_dict: { [key: number]: string } = {
    400: 'Credenciales incorrectas',
    500: 'Error del servidor',
  };

  areCorrectFields(): boolean {
    let dict: { [key: string]: string } = {};
    if (this.username === '') {
      dict['Usuario'] = 'El nombre de usuario es requerido';
    }
    if (this.password === '') {
      dict['Contraseña'] = 'La contraseña es requerida';
    }

    if (Object.keys(dict).length !== 0) {
      this.utilService.raiseInvalidFields(dict);
      return false;
    } else {
      return true;
    }
  }
  hasQueryParams() {}
  iniciarSesion(): void {
    console.log('Iniciando sesión...');
    if (this.areCorrectFields()) {
      console.log('Entra1...');
      this.authService.login(this.username, this.password).subscribe(
        (data: any) => {
          console.log('Respuesta del servidor:', data);
          const email = localStorage.getItem('email');
          this.UserService.getUserRole(email).subscribe(
            (usr) => (this.usuario = usr)
          );

          if (this.usuario?.role === 'ADMIN_CANELA, default-roles-talentsoft') {
            this.router.navigate(['/canela/usuarios']);
          } else if (
            this.usuario?.role !== 'ADMIN_CANELA, default-roles-talentsoft'
          ) {
            localStorage.setItem('username', this.username);
            this.router.navigate(['/planes-canela']); //Cambiar a '/canela/planes' si se quiere iniciar en la otra pagina
          }
        },
        (error: any) => {
          console.error('Error en la suscripción:', error);
          let code: number | undefined = error.status
            ? Math.round(error.status / 100) * 100
            : undefined;
          if (code && code in this.error_dict) {
            this.error_message = this.error_dict[code];
          }
          this.error = true;
          Swal.fire({
            icon: 'error',
            title: 'Error al iniciar sesión',
            text: this.error_message,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#AA2535',
          });
        }
      );
    }
  }
}
