export class SuscripcionDto {
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
    public subscriptionEndDate: Date,
    public numWorkers: number,
    public status: string
  ) {}
}
