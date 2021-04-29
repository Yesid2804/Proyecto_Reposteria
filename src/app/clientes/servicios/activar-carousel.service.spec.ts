import { TestBed } from '@angular/core/testing';

import { ActivarCarouselService } from './activar-carousel.service';

describe('ActivarCarouselService', () => {
  let service: ActivarCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivarCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
