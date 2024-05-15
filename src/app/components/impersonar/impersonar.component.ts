import { Component } from '@angular/core';
import { PerfilDto } from 'src/app/model/perfil-dto';
import { ImpersonarService } from 'src/app/service/impersonar.service';

@Component({
  selector: 'app-impersonar',
  templateUrl: './impersonar.component.html',
  styleUrls: ['./impersonar.component.css']
})
export class ImpersonarComponent {

  usuarios: PerfilDto[] = [];
  usuarioSeleccionado: PerfilDto | null = null;

  constructor(private impersonarService: ImpersonarService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.impersonarService.obtenerUsuarios().subscribe(
      (usuarios: PerfilDto[]) => {
        this.usuarios = usuarios;
      },
      (error: any) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }

  verDetalle(usuario: PerfilDto): void {
    this.usuarioSeleccionado = usuario;
  }

}
