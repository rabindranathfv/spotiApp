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

  constructor( private _newReleasesSpotifyService: NewReleasesSpotifyService ) { 
    this._newReleasesSpotifyService.getNewReleases();
  }

  ngOnInit() {
  }

}
