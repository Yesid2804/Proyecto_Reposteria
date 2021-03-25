import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperClientesComponent } from './stepper-clientes.component';

describe('StepperClientesComponent', () => {
  let component: StepperClientesComponent;
  let fixture: ComponentFixture<StepperClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
