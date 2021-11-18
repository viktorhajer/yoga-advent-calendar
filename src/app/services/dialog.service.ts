import {MatDialog} from '@angular/material/dialog';
import {CALENDAR} from '../repository/advent-calendar.db';
import {DayDialogComponent} from '../components/day-dialog/day-dialog.component';
import {Injectable} from '@angular/core';
import {WelcomeDialogComponent} from '../components/welcome-dialog/welcome-dialog.component';
import {GOD_MODE} from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private readonly dialog: MatDialog) {
  }

  openDay(day: number) {
    const document = CALENDAR[day - 1];
    this.dialog.open(DayDialogComponent, {
      disableClose: false,
      panelClass: 'day-modal',
      data: {day, document}
    });
  }

  openWelcome() {
    if (new Date('2021-12-01').getTime() >= new Date().getTime()) {
      this.dialog.open(WelcomeDialogComponent, {
        disableClose: !GOD_MODE
      });
    }
  }
}
