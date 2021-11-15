import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../components/dialog/dialog.component';
import {CALENDAR} from '../repository/advent-calendar.db';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private readonly dialog: MatDialog) {
  }

  openDay(day: number) {
    const document = CALENDAR[day - 1];

    console.log(CALENDAR);
    console.log(document);

    this.dialog.open(DialogComponent, {
      disableClose: false,
      data: {day, document}
    });
  }

  getRandomNumber(maximum = 10, ignore: number[]): number {
    let numb;
    while (!numb) {
      const randomNum = Math.floor(Math.random() * maximum);
      if (!ignore.some(n => n === randomNum)) {
        numb = randomNum;
      }
    }
    return numb;
  }

  getRandomNumbers(maximum = 10, count = 3): number[] {
    const numbs: number[] = [];
    while (numbs.length < count) {
      const randomNum = Math.floor(Math.random() * maximum);
      if (!numbs.some(n => n === randomNum)) {
        numbs.push(randomNum);
      }
    }
    return numbs;
  }
}
