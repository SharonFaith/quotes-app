import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPassedCount'
})
export class DaysPassedCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
