import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesSpotifyService {

  constructor( private http: HttpClient  ) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDBGs6NkTEWQDMpkadAe0wwjMPXnL6q3JnK68YCPZVXUf71xMMIoPDzHiHV_BLmCBN_2HfzXj_VEYJ7PcQ'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( (resp) => {
        console.log(resp);
      });
  }
}
