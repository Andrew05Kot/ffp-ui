import { TestBed } from '@angular/core/testing';

import { CompressCroppImageService } from './compress-crop-image.service';

describe('CompressCroppImageService', () => {
  let service: CompressCroppImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompressCroppImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
