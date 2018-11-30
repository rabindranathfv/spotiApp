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
  @Input() imgUrlArt: any;
  @Input() artistId: string;
  @Input() popularity: number;
  @Input() artistName: any;
  @Input() followers: number;
  @Input() artistGenres: any[];


  constructor(  ) {  }

  ngOnInit() {
  }

}
