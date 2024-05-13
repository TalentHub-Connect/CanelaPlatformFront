import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MarketingService} from "../../service/marketing.service";
import {Marketingstatus} from "../../model/marketingstatus";
import Swal from "sweetalert2";


@Component({
  selector: 'app-estado-marketing',
  templateUrl: './estado-marketing.component.html',
  styleUrl: './estado-marketing.component.css'
})
export class EstadoMarketingComponent implements OnInit {
  constructor(
    private router: Router,
    private marketingService: MarketingService,
  ) {}

  estados : Marketingstatus[] | undefined;
  nuevo_estado: string | undefined;

  ngOnInit(): void {
    this.marketingService.findAllStatuses().subscribe(estados => this.estados = estados);
  }

  guardar(){
    if(this.nuevo_estado!=undefined){
      let estado = new Marketingstatus(-1,this.nuevo_estado);
      let timerInterval: any;
      Swal.fire({
        title: "Guardando...",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          let timer: any;
          timerInterval = setInterval(() => {
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
      this.marketingService.saveStatus(estado).subscribe(x => window.location.reload());
    }

  }

  eliminarEstado(id: number){
    let timerInterval: any;
    Swal.fire({
      title: "Eliminando...",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        let timer: any;
        timerInterval = setInterval(() => {
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    this.marketingService.delete(id).subscribe(x => window.location.reload());

  }
}
