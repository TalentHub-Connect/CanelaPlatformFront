import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponDetalleComponent } from './cupon-detalle.component';

describe('CuponDetalleComponent', () => {
  let component: CuponDetalleComponent;
  let fixture: ComponentFixture<CuponDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuponDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuponDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
