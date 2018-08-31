import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {
  transform(value: Date, args?: any): string {
    const 
      day = value.getDay(),
      month = value.getMonth(),
      year = value.getFullYear();

    return `${day < 10 ? '0' + day : day}:${month < 10 ? '0' + month : month}:${year}`;
  }
}
