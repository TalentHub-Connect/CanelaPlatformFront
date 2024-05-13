export class EmpresaDto {
  constructor(
    public id: number,
    public idlegalrepresentative: number,
    public nit: number,
    public namecompany: string,
    public phonecompany: number,
    public numworkers: number,
    public address: string,
    public subscriptionenddate: string,
    public linkdate: string,
    public email: string,
    public status: string
  ) {}
}
