import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, args: number = 10): any {
    if (value.length > args) {
      return value.substr(0, args) + '...';
    } else {
      return value;
    }
  }

}
