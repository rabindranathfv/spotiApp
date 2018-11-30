import { Component, OnInit } from '@angular/core';
import { NewReleasesSpotifyService } from '../../services/new-releases-spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistList: any[] = [];
  constructor( private _newReleasesSpotifyService: NewReleasesSpotifyService ) {
    console.log(this.artistList);
  }

  ngOnInit() {
  }

  findByArtist(searchTerm: string) {
    if (searchTerm.length > 0) {
      console.log(searchTerm);
      this._newReleasesSpotifyService.getArtist(searchTerm)
        .subscribe( (resp: any) => {
          // console.log(resp.artists.items);
          // this.artistList = resp.artists.items;
          this.artistList = resp;
        });
    }
  }

}
