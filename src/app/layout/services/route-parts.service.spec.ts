import { TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { RoutePartsService } from './route-parts.service';

describe('RoutePartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: '', children: [] }])
      ],
      providers: [RoutePartsService]
    });
  });

  it('should be created', inject([RoutePartsService], (service: RoutePartsService) => {
    expect(service).toBeTruthy();
  }));
});
