import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PerfilDto } from 'src/app/model/perfil-dto';
import { PerfilService } from 'src/app/service/perfil.service';
import { PerfilEditar } from 'src/app/model/perfil-editar';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {Employee} from "../../model/employee";

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
  ) {
  }

  perfil: Employee | undefined;
  entradaTelefono: string | undefined;
  entradaNombreContacto: string | undefined;
  entradanTelContacto: number | undefined;

  username = localStorage.getItem('username');

  ngOnInit(): void {
    console.log('.........' + this.username);
    if (this.username) {
      this.PerfilService.findByUsername(this.username).subscribe((perfil) => {
        console.log('Perfil encontrado:', perfil);
        this.perfil = perfil
      });
    }
  }

  editar() {
    let inputNumberPhone = this.entradaTelefono;
    let inputEmergencyName = this.entradaNombreContacto;
    let inputEmergencyContact = this.entradanTelContacto;
    if(this.perfil){
      if(inputNumberPhone){
        this.perfil.phoneNumber = inputNumberPhone;
      }
      if(inputEmergencyContact){
        this.perfil.emergencycontact = inputEmergencyContact;
      }
      if(inputEmergencyName){
        this.perfil.nameemergencycontact = inputEmergencyName;
      }
      this.PerfilService.modificarPerfil(
        this.perfil,
        this.perfil.id
      ).subscribe((result) => {
        this.router.navigate(['/canela/perfil/view/:id']);
      });
    }
  }

  volver() {
    this.router.navigate(['/canela/perfil/view/:id']);
  }
}
