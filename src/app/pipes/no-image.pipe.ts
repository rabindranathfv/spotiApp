import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform( imgs: any ): string {
    if ( imgs.length > 0) {
      return imgs[0].url;
    } else if (!imgs) {
      return `../../assets/img/noimage.png`;
    } else {
      return `../../assets/img/noimage.png`;
    }
  }

}
