import { TestBed, inject } from '@angular/core/testing';

import { CoursesOperationsService } from './courses-operations.service';

describe('CoursesOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesOperationsService]
    });
  });

  it('should be created', inject([CoursesOperationsService], (service: CoursesOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
