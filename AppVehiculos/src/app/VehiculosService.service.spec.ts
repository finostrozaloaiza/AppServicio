/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehiculosServiceService } from './VehiculosService.service';

describe('Service: VehiculosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculosServiceService]
    });
  });

  it('should ...', inject([VehiculosServiceService], (service: VehiculosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
