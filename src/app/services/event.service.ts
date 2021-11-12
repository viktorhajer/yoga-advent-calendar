import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private readonly dialog: MatDialog) {
  }

  openDay(day: number) {
    this.dialog.open(DialogComponent, {
      disableClose: false,
      data: {day}
    });
  }

  getRandomNumbers(maximum = 10, count = 3): number[] {
    const numbs: number[] = [];
    while(numbs.length < count) {
      const randomNum = Math.floor(Math.random() * maximum);
      if (!numbs.some(n => n === randomNum)) {
        numbs.push(randomNum);
      }
    }
    return numbs;
  }
}
