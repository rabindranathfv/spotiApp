import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-spotify',
  templateUrl: './card-spotify.component.html',
  styleUrls: ['./card-spotify.component.css']
})
export class CardSpotifyComponent implements OnInit {

  @Input() typeCard: string;

  @Input() album: any = {};
  @Input() imgUrl: any;
  @Input() albumName: string;
  @Input() artiststArr: any[] = [];
  @Input() albumHref: any;
  @Input() totalTracks: number;
  @Input() releaseDate: any;
  @Input() albumId: string;

  @Input() artistsList: any[] = [];
  @Input() artistId: string;
  @Input() popularity: number;
  @Input() artistName: any;
  @Input() followers: number;
  @Input() artistGenres: any[];


  constructor(  ) {  }

  ngOnInit() {
  }

  getArtistId( data: any) {
    let artistID;
    if ( data.type === 'artist') {
      artistID = data.id;
    } else {
      artistID = data.artists[0].id;
    }

    console.log(artistID);
  }

}
