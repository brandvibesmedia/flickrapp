/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoServiceService } from './photo-service.service';

describe('PhotoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoServiceService]
    });
  });

  it('should ...', inject([PhotoServiceService], (service: PhotoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
