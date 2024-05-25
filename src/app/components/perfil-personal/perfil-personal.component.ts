import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PerfilDto } from 'src/app/model/perfil-dto';
import { PerfilService } from 'src/app/service/perfil.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil-personal',
  templateUrl: './perfil-personal.component.html',
  styleUrl: './perfil-personal.component.css',
})
export class PerfilPersonalComponent implements OnInit {
  constructor(
    private router: Router,
    private PerfilService: PerfilService,
    private route: ActivatedRoute
  ) {}

  perfil: PerfilDto | undefined;

  username = localStorage.getItem('username');

  ngOnInit(): void {
    console.log('.........' + this.username);
    if (this.username) {
      this.PerfilService.findByUsername(this.username).subscribe((perfil) => {
        console.log('Perfil encontrado:', perfil);
      });
    }
    /*  
    this.route.paramMap
      .pipe(
        switchMap((params) => this.PerfilService.findById(+params.get('id')!))
      )
      .subscribe((PerfilDto) => (this.perfil = PerfilDto));*/
  }

  editarInformacion() {
    this.router.navigate(['canela/perfil/edit/:username']);
  }
}
