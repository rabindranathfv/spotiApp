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
      'Authorization': 'Bearer BQCLt67K6pFHoqvauZ-ZsfqYqkBoJ51qlhJ7Pt5iejA3leAOPNkVkucezMLn3r53TfCeEjNv9IgndmgS7JQ'
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
