import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-spotify',
  templateUrl: './card-spotify.component.html',
  styleUrls: ['./card-spotify.component.css']
})
export class CardSpotifyComponent implements OnInit {

  @Input() album: any = {};
  @Input() imgUrl: any;
  @Input() albumName: string;
  @Input() artiststArr: any[] = [];
  @Input() albumHref: any;
  @Input() totalTracks: number;
  @Input() releaseDate: any;
  @Input() albumId: string;


  constructor(  ) {  }

  ngOnInit() {
  }

}
