export class Cupon {
    constructor(
        public id: number,
        public name: String,
        public description: String,
        public expirationdate: string,
        public status: String,
        public companyId: number,
        public discountrate: number,
        
      ) {}
}
