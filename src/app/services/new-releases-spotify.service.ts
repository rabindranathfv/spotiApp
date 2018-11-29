import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesSpotifyService {

  constructor( private http: HttpClient  ) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDCfmKgSuOvDGshWLxRrF0fCMCU8o-aBUlG7DANP7S25IA1qze_HPF31S-pb3PSnJCDJFxzxGSgvg914tI'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
