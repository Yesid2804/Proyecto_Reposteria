import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDomiciliarioComponent } from './tabla-domiciliario.component';

describe('TablaDomiciliarioComponent', () => {
  let component: TablaDomiciliarioComponent;
  let fixture: ComponentFixture<TablaDomiciliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDomiciliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
