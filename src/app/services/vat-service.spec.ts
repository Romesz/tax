import { TestBed, inject } from '@angular/core/testing';

import { VatServiceService } from './vat-service.service';

describe('VatServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VatServiceService]
    });
  });

  it('should be created', inject([VatServiceService], (service: VatServiceService) => {
    expect(service).toBeTruthy();
  }));
});
