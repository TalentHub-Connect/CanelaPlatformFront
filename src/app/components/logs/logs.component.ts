import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Soporte } from 'src/app/model/soporte';
import { SoporteService } from 'src/app/service/soporte.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css',
})
export class LogsComponent implements OnInit {

  listSoporte: Soporte[] = [];

  constructor(private supportTicketService: SoporteService) { }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.supportTicketService.getAllTickets()
      .subscribe(tickets => this.listSoporte = tickets);
  }

}