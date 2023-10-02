import { TestBed } from '@angular/core/testing';

import { JsonSvcService } from './json-svc.service';

describe('JsonSvcService', () => {
  let service: JsonSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
