import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { ServiciosService } from 'src/app/service/servicios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent  {


  servicios: Servicio[] = [];


  constructor(
    private router: Router,
    private serviciosService: ServiciosService
  ) {
  }
  ngOnInit(): void {
    this.serviciosService.getServicio().subscribe(
      (data) => {
        this.servicios = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

  edicionIniciada = false; // Variable para rastrear si se inició la edición

  confirmarEdicion(servicio: Servicio) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas modificar este servicio?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        // Inicia la edición del servicio
        servicio.editado = true;
        this.edicionIniciada = true; // Marca que se ha iniciado la edición
      }
    });
  }

  confirmarEdicionServicio() {
    // Aquí puedes implementar la lógica para confirmar la edición del servicio
    console.log('Edición confirmada');
    // Por ejemplo, puedes guardar los cambios en el backend
    // Luego puedes reiniciar el estado de edición
    this.edicionIniciada = false;
  }

  confirmarEliminar(servicio: Servicio) {
    // Mensaje de confirmación para eliminar
    Swal.fire({
      title: 'Eliminar servicio',
      text: '¿Estás seguro de que deseas eliminar este servicio?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.value) {
        // Aquí puedes implementar la lógica para eliminar el servicio
        console.log('Eliminando servicio:', servicio);
      }
    });
  }

  cambiarEstado(servicio: Servicio) {
    // Cambia el estado del servicio
    servicio.estatus = (servicio.estatus === 'ACTIVO') ? 'INACTIVO' : 'ACTIVO';
  }

  nuevoUsuario() {
    this.router.navigate(['canela/crear-servicio']);
  }
}
