import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPassedCount'
})
export class DaysPassedCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayNoTime - value) //returns value in milliseconds
    const secondsInDay = 86400
    var dateDifferenceSeconds = dateDifference*0.001 //CONVERTS MILLISECONDS TO SECONDS
    var dateCounter = dateDifferenceSeconds/secondsInDay //get days

    if(dateCounter >= 1 && value < todayNoTime) {
      return dateCounter;
    } else {
      return 0
    }
  }

}
