import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { NewReleasesSpotifyService } from '../../services/new-releases-spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artistData: any = {};
  loading: boolean;
  constructor( private activatedRoute: ActivatedRoute,
               public _newReleasesSpotifyService: NewReleasesSpotifyService
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe( (params: any) => {
      this.getArtistById( params['id'] );
      this.loading = false;
    });
   }

  ngOnInit() {
  }

  getArtistById( id: string) {
    return this._newReleasesSpotifyService.getArtistDetails( id ).subscribe( (artist: any) => this.artistData = artist );
  }
}
