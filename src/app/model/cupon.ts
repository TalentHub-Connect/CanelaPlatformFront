export class Cupon {
    constructor(
        public id: number,
        public nombre: String,
        public descripcion: String,
        public fechaExpiracion: Date,
        public estatus: String,
        public descuento: number,
        public companyid: number,
        
      ) {}
}
