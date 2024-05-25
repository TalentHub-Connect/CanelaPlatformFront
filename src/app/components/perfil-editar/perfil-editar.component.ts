import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PerfilDto } from 'src/app/model/perfil-dto';
import { PerfilService } from 'src/app/service/perfil.service';
import { PerfilEditar } from 'src/app/model/perfil-editar';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrl: './perfil-editar.component.css',
})
export class PerfilEditarComponent implements OnInit {
  constructor(
    private router: Router,
    private PerfilService: PerfilService,
    private route: ActivatedRoute
  ) {}

  perfil: PerfilDto | undefined;
  perfilEditar: PerfilEditar | undefined;
  entradaCedula: number | undefined;
  entradaDireccion: string | undefined;
  entradaTelefono: number | undefined;
  entradaNombreContacto: string | undefined;
  entradanTelContacto: number | undefined;

  username = localStorage.getItem('username');

  ngOnInit(): void {
    console.log('.........' + this.username);
    if (this.username) {
      this.PerfilService.findByUsername(this.username).subscribe((perfil) => {
        console.log('Perfil encontrado:', perfil);
      });
    }
  }

  editar() {
    let inputIdentification = this.entradaCedula;
    let inputAdress = this.entradaDireccion;
    let inputNumberPhone = this.entradaTelefono;
    let inputEmergencyName = this.entradaNombreContacto;
    let inputEmergencyContact = this.entradanTelContacto;

    if (
      inputIdentification != undefined &&
      inputAdress != undefined &&
      inputAdress != '' &&
      inputNumberPhone != undefined &&
      inputEmergencyName != undefined &&
      inputEmergencyName != '' &&
      inputEmergencyContact != undefined
    ) {
      if (this.perfilEditar != undefined) {
        this.perfilEditar.identificacion = inputIdentification;
        this.perfilEditar.address = inputAdress;
        this.perfilEditar.numberPhone = inputNumberPhone;
        this.perfilEditar.emergencycontactname = inputEmergencyName;
        this.perfilEditar.emergencyContact = inputEmergencyContact;

        this.PerfilService.modificarPerfil(
          this.username,
          this.perfilEditar
        ).subscribe((result) => {
          this.router.navigate(['/canela/perfil/view/:id']);
        });
      }
    }
  }

  volver() {
    this.router.navigate(['/canela/perfil/view/:id']);
  }
}
