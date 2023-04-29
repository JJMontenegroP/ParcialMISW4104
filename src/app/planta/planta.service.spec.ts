/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantaService } from './planta.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Planta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PlantaService],
    });
  });

  it('should ...', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
