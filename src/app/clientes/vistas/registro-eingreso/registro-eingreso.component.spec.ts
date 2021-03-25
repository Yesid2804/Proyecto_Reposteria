import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEIngresoComponent } from './registro-eingreso.component';

describe('RegistroEIngresoComponent', () => {
  let component: RegistroEIngresoComponent;
  let fixture: ComponentFixture<RegistroEIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
