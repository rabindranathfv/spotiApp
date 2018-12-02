import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'safeDom'
})
export class SafeDomPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  transform( value: string): any {
    const url = 'https://open.spotify.com/embed/album/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
