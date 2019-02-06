import { TestBed } from '@angular/core/testing';

import { UserPreferncesService } from './user-prefernces.service';

describe('UserPreferncesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPreferncesService = TestBed.get(UserPreferncesService);
    expect(service).toBeTruthy();
  });
});
