import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../../models/course-interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: Array<object>, filter: string, query?: string): Array<object> {
    switch(filter) {
      case 'date': return arr.sort((a: CourseInterface, b: CourseInterface) => {
        let result = 0;
        const
          aDate = new Date(a.creationDate),
          bDate = new Date(b.creationDate);

        if (aDate < bDate) {
          result = -1;
        } else if (aDate > bDate) {
          result = 1;
        }

        return result;
      });
      case 'string': return arr.filter((a: CourseInterface) => a.title.toLowerCase().includes(query));
      default: return arr;
    }
  }
}
