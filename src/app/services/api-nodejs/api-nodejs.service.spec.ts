import { TestBed } from '@angular/core/testing';

import { ApiNodejsService } from './api-nodejs.service';

describe('ApiNodejsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiNodejsService = TestBed.get(ApiNodejsService);
    expect(service).toBeTruthy();
  });
});
