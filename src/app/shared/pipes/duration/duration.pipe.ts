import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return `${hours > 0 ? hours + 'h' : ''} ${minutes < 10 ? '0' + minutes : minutes}min`;
  }
}
