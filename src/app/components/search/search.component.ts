import { Component, OnInit } from '@angular/core';
import { NewReleasesSpotifyService } from '../../services/new-releases-spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistList: any[] = [];
  loading: boolean;
  constructor( private _newReleasesSpotifyService: NewReleasesSpotifyService ) {
    console.log(this.artistList);
  }

  ngOnInit() {
  }

  findByArtist(searchTerm: string) {
    if (searchTerm.length > 0) {
      this.loading = true;
      console.log(searchTerm);
      this._newReleasesSpotifyService.getArtists(searchTerm)
        .subscribe( (resp: any) => {
          // console.log(resp.artists.items);
          // this.artistList = resp.artists.items;
          this.artistList = resp;
          this.loading = false;
        });
    }
  }

}
