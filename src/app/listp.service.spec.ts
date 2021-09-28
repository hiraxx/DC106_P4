import { TestBed } from '@angular/core/testing';

import { ListpService } from './listp.service';

describe('ListpService', () => {
  let service: ListpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
