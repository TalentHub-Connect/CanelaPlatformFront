import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PermisosUsuarioComponent } from './components/permisos-usuario/permisos-usuario.component';
import { GestionPlanesComponent } from './components/gestion-planes/gestion-planes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { PerfilPersonalComponent } from './components/perfil-personal/perfil-personal.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { PlanCrearComponent } from './components/plan-crear/plan-crear.component';
import { PlanEditarComponent } from './components/plan-editar/plan-editar.component';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { PerfilEditarComponent } from './components/perfil-editar/perfil-editar.component';
import { EstadoMarketingComponent } from './components/estado-marketing/estado-marketing.component';
import { PlanesCanelaComponent } from './components/planes-canela/planes-canela.component';
import { EditarPlanComponent } from './components/editar-plan/editar-plan.component';
import { CrearPlanComponent } from './components/crear-plan/crear-plan.component';
import { ServiciosComponent } from './components/servicios/servicios/servicios.component';
import { CuponesComponent } from './components/cupones/cupones/cupones.component';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { CuponDetalleComponent } from './components/cupon-detalle/cupon-detalle/cupon-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PermisosUsuarioComponent,
    GestionPlanesComponent,
    UsuariosComponent,
    SlidebarComponent,
    PerfilPersonalComponent,
    MarketingComponent,
    SuscripcionesComponent,
    PlanCrearComponent,
    PlanEditarComponent,
    CrearEmpresaComponent,
    EditarEmpresaComponent,
    PerfilEditarComponent,
    EstadoMarketingComponent,
    PlanesCanelaComponent,
    EditarPlanComponent,
    CrearPlanComponent,
    ServiciosComponent,
    CuponesComponent,
    CrearServicioComponent,
    CuponDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
