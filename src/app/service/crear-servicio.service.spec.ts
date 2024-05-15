import { TestBed } from '@angular/core/testing';

import { CrearServicioService } from './crear-servicio.service';

describe('CrearServicioService', () => {
  let service: CrearServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
