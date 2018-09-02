import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: Array<object>, args?: any): Array<object> {
    return arr.sort((a: any, b: any) => {
      const 
        aDate = new Date(a.creationDate),
        bDate = new Date(b.creationDate);

      if (aDate < bDate) {
        return -1;
      } else if (aDate > bDate) {
        return 1;
      }

      return 0;
    });
  }

}
