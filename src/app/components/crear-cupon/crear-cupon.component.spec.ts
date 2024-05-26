import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuponComponent } from './crear-cupon.component';

describe('CrearCuponComponent', () => {
  let component: CrearCuponComponent;
  let fixture: ComponentFixture<CrearCuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearCuponComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
