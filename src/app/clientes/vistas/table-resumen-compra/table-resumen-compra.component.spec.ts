import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResumenCompraComponent } from './table-resumen-compra.component';

describe('TableResumenCompraComponent', () => {
  let component: TableResumenCompraComponent;
  let fixture: ComponentFixture<TableResumenCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableResumenCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResumenCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
