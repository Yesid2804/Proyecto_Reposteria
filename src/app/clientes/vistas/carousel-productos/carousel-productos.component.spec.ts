import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProductosComponent } from './carousel-productos.component';

describe('CarouselProductosComponent', () => {
  let component: CarouselProductosComponent;
  let fixture: ComponentFixture<CarouselProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
