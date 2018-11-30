import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewReleasesSpotifyService {

  constructor( private http: HttpClient  ) { }

  getNewReleases(): any {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBUQMwO5i1q7Jn24zoZUvYM30MWfR5dpMtyT40Gkeir4k4cC-bUcgQpUzSF5hx6dBx5PLogNSvFStVNg0Y'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(searchTerm: string): any {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBUQMwO5i1q7Jn24zoZUvYM30MWfR5dpMtyT40Gkeir4k4cC-bUcgQpUzSF5hx6dBx5PLogNSvFStVNg0Y'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ searchTerm }&type=artist&limit=10`, { headers });
  }

}
