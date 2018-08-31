import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeDifferenceService {
  public current: Date;

  constructor() {
    this.current = new Date();
  }

  get(created: Date): number {
    return this.current.getMilliseconds() - created.getMilliseconds();
  }
}
