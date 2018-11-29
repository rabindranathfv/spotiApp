import { TestBed } from '@angular/core/testing';

import { NewReleasesSpotifyService } from './new-releases-spotify.service';

describe('NewReleasesSpotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewReleasesSpotifyService = TestBed.get(NewReleasesSpotifyService);
    expect(service).toBeTruthy();
  });
});
