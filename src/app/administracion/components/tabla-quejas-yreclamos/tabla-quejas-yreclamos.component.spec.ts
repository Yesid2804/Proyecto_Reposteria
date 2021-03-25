import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaQuejasYReclamosComponent } from './tabla-quejas-yreclamos.component';

describe('TablaQuejasYReclamosComponent', () => {
  let component: TablaQuejasYReclamosComponent;
  let fixture: ComponentFixture<TablaQuejasYReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaQuejasYReclamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaQuejasYReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
