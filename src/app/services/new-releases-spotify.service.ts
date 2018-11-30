import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewReleasesSpotifyService {

  constructor( private http: HttpClient  ) { }

  getQuery( query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC0ahQnoFP_wBPdTt__PBJy5J5-skZX0kCeh3_9fAtTEilw9vUY6gSe25BNMRpqLkvnyqW5kWkC_9fVIow'
    });
    const apiUrl = `https://api.spotify.com/v1/${ query }`;
    return this.http.get(apiUrl, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe( map( (resp: any) => resp.albums.items ));
  }

  getArtist(searchTerm: string): any {
    return this.getQuery(`search?q=${ searchTerm }&type=artist&limit=15`).pipe( map( (resp: any) => resp.artists.items ));
  }

}
