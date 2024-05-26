export class SuscripcionesDto {
  constructor(
    public id: number,
    public nameCompany: string,
    public nit: number,
    public address: string,
    public email: string,
    public phoneCompany: number,
    public nameLegalRepresentative: string,
    public idLegalRepresentative: number,
    public linkDate: string,
    public subscriptionEndDate: string,
    public numWorkers: number,
    public status: string
  ) {}
}
