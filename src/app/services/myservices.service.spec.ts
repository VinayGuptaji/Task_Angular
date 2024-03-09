import { TestBed } from '@angular/core/testing';

import { MyservicesService } from './myservices.service';

describe('MyservicesService', () => {
  let service: MyservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
