import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasYReclamosComponent } from './quejas-yreclamos.component';

describe('QuejasYReclamosComponent', () => {
  let component: QuejasYReclamosComponent;
  let fixture: ComponentFixture<QuejasYReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejasYReclamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejasYReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
