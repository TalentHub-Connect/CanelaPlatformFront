import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioPermisoDto } from 'src/app/model/usuario-permiso-dto';
import { PermisosUsuarioService } from 'src/app/service/permisos-usuario.service';
import { User } from 'src/app/shared/model/auth/user';
import { UserService } from '../../shared/model/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-permisos-usuario',
  templateUrl: './permisos-usuario.component.html',
  styleUrls: ['./permisos-usuario.component.css'],
})
export class PermisosUsuarioComponent implements OnInit {
  constructor(
    private router: Router,
    private permisosUsuarioService: PermisosUsuarioService
  ) {}

  usuarioKeycloak: string[] | undefined;
  usuarios: UsuarioPermisoDto[] | undefined;
  roles: string[] | undefined;
  rolesPorUsuario: { [key: string]: string[] } = {};

  username: string | null = null;

  ngOnInit(): void {
    let timerInterval: any;
    Swal.fire({
      title: 'Cargando...',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading(null);
        let timer: any;
        timerInterval = setInterval(() => {}, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });

    this.username = localStorage.getItem('username');

    this.permisosUsuarioService.findAllUsers().subscribe((users) => {
      this.usuarios = users;
      this.usuarios.forEach((user) => {
        this.rolesPorUsuario[user.username] = user.roles;
      });
      Swal.fire({
        icon: 'warning',
        title: 'Gestión de usuarios',
        text: 'No olvide guardar los cambios al finalizar',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#963e6c',
      });
    });
  }

  enableMarketing(id: number) {}

  enableFinanzas(id: number) {}

  enableServer(id: number) {}

  public handleCheckboxChange(
    event: Event,
    username: string,
    rol: string
  ): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const isChecked = target.checked;
      this.actualizarRoles(username, rol, isChecked);
    } else {
      // Manejar el caso en que target es null (si es necesario)
      console.error('El target es null en el evento del checkbox.');
    }
  }

  actualizarRoles(username: string, rol: string, isChecked: boolean): void {
    // Verificar si el usuario ya tiene este rol
    this.username = username;
    if (isChecked) {
      this.rolesPorUsuario[username].push(rol);
    } else {
      let rolesFinales: string[] = [];
      this.rolesPorUsuario[username].forEach((rolInner) => {
        if (rolInner != rol) {
          rolesFinales.push(rolInner);
        }
      });
      this.rolesPorUsuario[username] = rolesFinales;
    }

    console.log(
      'Roles actualizados para el usuario con ID : ' +
        this.username +
        ' Sus roles son: ' +
        this.rolesPorUsuario[username]
    );
  }

  guardarCambios() {
    if (this.usuarios != undefined) {
      let timerInterval: any;
      Swal.fire({
        title: 'Guardando...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading(null);
          let timer: any;
          timerInterval = setInterval(() => {}, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });

      this.usuarios.forEach((user) => {
        user.roles = this.rolesPorUsuario[user.username];
      });
      this.permisosUsuarioService
        .saveAllUsers(this.usuarios)
        .subscribe((result) => {
          if (!result) {
            Swal.fire({
              icon: 'error',
              title: 'Gestión de usuarios',
              text: 'Ha ocurrido un error al guardar los usuarios',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#963e6c',
            });
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Gestión de usuarios',
              text: 'Cambios guardados correctamente',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#963e6c',
            });
          }
        });
    }
  }

  /*
  enviarDatosRoles(): void {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Datos que se envían:', this.nuevoUsuarioAuth);

      this.userService
        .createUser(this.nuevoUsuarioAuth, this.nuevoUsuarioAuth.role, token)
        .subscribe({
          next: (data) => {
            console.log('Respuesta recibida:', data);
            this.router.navigate(['/canela/permisos']);
          },
          error: (err) => {
            console.error('Error al enviar datos:', err);
          },
        });
    } else {
      console.error('No se encontró el token de autenticación');
    }
  }
  */
  login() {
    this.router.navigate(['/']);
  }

  planes() {
    this.router.navigate(['/canela/planes']);
  }

  nuevoUsuario() {
    this.router.navigate(['canela/usuarios']);
  }
}
