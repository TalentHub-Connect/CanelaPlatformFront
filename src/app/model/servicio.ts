export class Servicio {
  id: number;
  description: string;
  roleId: number;
  estatus: string;

  constructor(id: number, description: string, roleId: number, estatus: string) {
    this.id = id;
    this.description = description;
    this.roleId = roleId;
    this.estatus = estatus;
  }
}
