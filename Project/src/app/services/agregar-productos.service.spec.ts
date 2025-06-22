import { TestBed } from '@angular/core/testing';

import { AgregarProductosService } from './agregar-productos.service';

describe('AgregarProductosService', () => {
  let service: AgregarProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
