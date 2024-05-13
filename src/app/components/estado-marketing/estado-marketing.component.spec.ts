import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoMarketingComponent } from './estado-marketing.component';

describe('EstadoMarketingComponent', () => {
  let component: EstadoMarketingComponent;
  let fixture: ComponentFixture<EstadoMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadoMarketingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
