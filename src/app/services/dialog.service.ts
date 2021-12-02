import {MatDialog} from '@angular/material/dialog';
import {CALENDAR} from '../repository/advent-calendar.db';
import {DocumentDialogComponent} from '../components/document-dialog/document-dialog.component';
import {Injectable} from '@angular/core';
import {WelcomeDialogComponent} from '../components/welcome-dialog/welcome-dialog.component';
import {Observable} from 'rxjs';
import {DocumentSequenceModel} from '../models/document-sequence.model';
import {DocumentModel} from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private readonly dialog: MatDialog) {
  }

  openDay(day: number): Observable<void> {
    const document = CALENDAR[day - 1];
    return this.openDocument(day, document);
  }

  openDocument(index: number, document: DocumentModel): Observable<void> {
    return this.dialog.open(DocumentDialogComponent, {
      panelClass: 'full-modal',
      data: {index, document}
    }).afterClosed();
  }

  openSequence(index: number, sequence: DocumentSequenceModel): Observable<void> {
    return this.dialog.open(DocumentDialogComponent, {
      panelClass: 'full-modal',
      data: {index, sequence}
    }).afterClosed();
  }

  openWelcome(): Observable<void> {
    return this.dialog.open(WelcomeDialogComponent, {
      panelClass: 'full-modal'
    }).afterClosed();
  }
}
