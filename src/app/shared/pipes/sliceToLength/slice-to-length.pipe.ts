import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceToLength'
})
export class SliceToLengthPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return value.length >= 247 ? value.slice(0, 247) + '...' : value;
  }
}
