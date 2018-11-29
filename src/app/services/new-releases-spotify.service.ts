import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesSpotifyService {

  constructor( private http: HttpClient  ) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBmq_U44h8xeSU9AFiu_ISWWPLtQT2jKI1uQEQSd2cjzUET8_j2PibO63WqRR5Vg9v61cVGZGNpwp3V6IU'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
