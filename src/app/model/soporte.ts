import { Time } from '@angular/common';

export class Soporte {
  constructor(
    public id: number,
    public tittle: string,
    public description: string,
    public ticketDate: string,
    public hour: string,
    public status: string,
    public answer: string,
    public companyId: number,
    public typeSupportId: number,
    public userid: number
  ) {}
}
