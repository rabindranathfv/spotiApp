import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewReleasesSpotifyService {

  constructor( private http: HttpClient  ) { }

  getQuery( query: string) {
    // https://accounts.spotify.com/api/token with this paremeters in body section
    // grant_type: client_credentials
    // client_id: cliendId (spotify give to me)
    // client_secret: clientSecret (spotify give to me)
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCxUOg1aiONT8QtM88mTxL2hSwgAGYT49EarQAP1g89VlIgOflzQpB2WNbhqM4mQeqvXwRQAYUoju3Usks'
    });
    const apiUrl = `https://api.spotify.com/v1/${ query }`;
    return this.http.get(apiUrl, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe( map( (resp: any) => resp.albums.items ));
  }

  getArtists(searchTerm: string): any {
    return this.getQuery(`search?q=${ searchTerm }&type=artist&limit=15`).pipe( map( (resp: any) => resp.artists.items ));
  }

  getArtistDetails( id: string): any {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string): any {
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`).pipe( map( (resp: any) => resp.tracks ));  }

}
