import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toman'
})
export class TomanPipe implements PipeTransform {

  transform(value: any): number {
    if (value === null || value === undefined) return 0;
    return Math.floor(+value / 10);
  }

}
