import {MatDialog} from '@angular/material/dialog';
import {CALENDAR} from '../repository/advent-calendar.db';
import {DayDialogComponent} from '../components/day-dialog/day-dialog.component';
import {Injectable} from '@angular/core';
import {WelcomeDialogComponent} from '../components/welcome-dialog/welcome-dialog.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private readonly dialog: MatDialog) {
  }

  openDay(day: number): Observable<void> {
    const document = CALENDAR[day - 1];
    return this.dialog.open(DayDialogComponent, {
      panelClass: 'day-modal',
      data: {day, document}
    }).afterClosed();
  }

  openWelcome(): Observable<void> {
    return this.dialog.open(WelcomeDialogComponent).afterClosed();
  }
}
