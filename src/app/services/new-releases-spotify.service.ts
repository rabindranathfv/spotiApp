import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesSpotifyService {

  constructor( private http: HttpClient  ) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBPjTT1x8YC9Le5e8IJl0eFMUCVLAgVZ2RYnb5H128UkVavq6YIL2o0Xgns9WQO_xO44Vfa1lU1JGnb1t8'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
