import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// services
import { NewReleasesSpotifyService } from '../../services/new-releases-spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleasesList: any[] = [];
  loading: boolean;
  constructor( private _newReleasesSpotifyService: NewReleasesSpotifyService ) {
    this.loading = true;
    this._newReleasesSpotifyService.getNewReleases()
      .subscribe( (resp: any) => {
        // console.log(resp);
        // this.newReleasesList = resp.albums.items;
        this.newReleasesList = resp;
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
