import { TestBed } from '@angular/core/testing';

import { ApiAdonisjsService } from './api-adonisjs.service';

describe('ApiAdonisjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiAdonisjsService = TestBed.get(ApiAdonisjsService);
    expect(service).toBeTruthy();
  });
});
