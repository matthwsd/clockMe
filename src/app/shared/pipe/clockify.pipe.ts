import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clockify'
})
export class ClockifyPipe implements PipeTransform {

  transform(value: number): string {
    let minutes: number, seconds: number, ms: number;
    let formatted: string = "";

    ms = value % 1000 / 100;
    seconds = Math.floor(value / 1000);
    if (seconds >= 60) {
      seconds -= 60 * Math.floor(seconds / 60)
    }
    minutes = Math.floor(value / 60000);

    formatted = `${minutes <= 9 ? `0${minutes}` : minutes}:${seconds <= 9 ? `0${seconds}` : seconds}.${ms}`;

    return formatted;
  }

}
