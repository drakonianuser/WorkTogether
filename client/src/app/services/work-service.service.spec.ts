import { TestBed } from '@angular/core/testing';

import { WorkServiceService } from './work-service.service';

describe('WorkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkServiceService = TestBed.get(WorkServiceService);
    expect(service).toBeTruthy();
  });
});
