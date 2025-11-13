import { TestBed } from '@angular/core/testing';

import { LayoutToggleService } from './layout-toggle.service';

describe('LayoutToggleService', () => {
  let service: LayoutToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
