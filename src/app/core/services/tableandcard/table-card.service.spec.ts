import { TestBed } from '@angular/core/testing';

import { TableCardService } from './table-card.service';

describe('TableCardService', () => {
  let service: TableCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
