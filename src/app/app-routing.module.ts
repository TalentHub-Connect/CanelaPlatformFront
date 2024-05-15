import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PermisosUsuarioComponent } from './components/permisos-usuario/permisos-usuario.component';
import { GestionPlanesComponent } from './components/gestion-planes/gestion-planes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PerfilPersonalComponent } from './components/perfil-personal/perfil-personal.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { PlanCrearComponent } from './components/plan-crear/plan-crear.component';
import { PlanEditarComponent } from './components/plan-editar/plan-editar.component';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { PerfilEditarComponent } from './components/perfil-editar/perfil-editar.component';
import { LogsComponent } from './components/logs/logs.component';
import { MesaAyudaComponent } from './components/mesa-ayuda/mesa-ayuda.component';
import { ImpersonarComponent } from './components/impersonar/impersonar.component';
import { VerEmpresaComponent } from './components/ver-empresa/ver-empresa.component';
import { EstadoMarketingComponent } from "./components/estado-marketing/estado-marketing.component";
import { PlanesCanelaComponent } from './components/planes-canela/planes-canela.component';
import { EditarPlanComponent } from './components/editar-plan/editar-plan.component';
import { CrearPlanComponent } from './components/crear-plan/crear-plan.component';
import { ServiciosComponent } from './components/servicios/servicios/servicios.component';
import { CuponesComponent } from './components/cupones/cupones/cupones.component';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { CuponDetalleComponent } from './components/cupon-detalle/cupon-detalle/cupon-detalle.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { CrearCuponComponent } from './components/crear-cupon/crear-cupon/crear-cupon.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  {
    path: '', // Utiliza una ruta vacía como prefijo para las rutas con Navbar
    component: SlidebarComponent, // Este componente actúa como un layout
    children: [
      {path: 'canela/permisos', component: PermisosUsuarioComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
        ],
      },
    },
      { path: 'canela/usuarios', component: UsuariosComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
        ],
      },
    },
      { path: 'canela/logs', component: LogsComponent ,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'SOPORTE'
        ],
      },
    },
      { path: 'canela/mesa-ayuda', component: MesaAyudaComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'SOPORTE'
        ],
      },
    },

      { path: 'canela/impersonar', component: ImpersonarComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'SOPORTE'
        ],
      },
    },

    { path: 'canela/marketing', component: MarketingComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [
        'ADMIN',
        'MARKETING'
      ],
    },
  },

    { path: 'canela/marketing/status', component: EstadoMarketingComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [
        'ADMIN',
        'MARKETING'
      ],
    },
  },

  { path: 'canela/servicios', component: ServiciosComponent,
  canActivate: [AuthGuard],
  data: {
    roles: [
      'ADMIN',
      'CUENTAS'
    ],
  },
},
      {path: 'canela/crear-servicio', component: CrearServicioComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },

      { path: 'canela/planes', component: GestionPlanesComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },

      { path: 'planes-canela', component: PlanesCanelaComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'editar-plan/:id', component: EditarPlanComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'editar-plan', component: EditarPlanComponent ,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'crear-plan', component: CrearPlanComponent ,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'canela/plan/edit/4', component: PlanEditarComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'canela/plan/add', component: PlanCrearComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },

      { path: 'canela/perfil/view/:id', component: PerfilPersonalComponent },
      { path: 'canela/perfil/edit/:username', component: PerfilEditarComponent, }, 
      { path: 'canela/cupones', component: CuponesComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'canela/cupon-detalle/:id', component: CuponDetalleComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'canela/crear-cupon', component: CrearCuponComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'canela/suscripciones', component: SuscripcionesComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'canela/empresa/add', component: CrearEmpresaComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'canela/empresa/edit/:id', component: EditarEmpresaComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      { path: 'canela/empresa/ver:id', component: VerEmpresaComponent,
      canActivate: [AuthGuard],
      data: {
        roles: [
          'ADMIN',
          'CUENTAS'
        ],
      },
    },
      
      
      // Ruta hija
      // Puedes añadir más rutas hijas que requieran Navbar aquí
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
