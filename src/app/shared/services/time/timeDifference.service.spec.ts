import { TestBed, inject } from '@angular/core/testing';

import { TimeDifferenceService } from './timeDifference.service';

describe('TimeDifferenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeDifferenceService]
    });
  });

  it('should be created', inject([TimeDifferenceService], (service: TimeDifferenceService) => {
    expect(service).toBeTruthy();
  }));
});
