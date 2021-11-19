import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DocumentModel} from '../../models/document.model';

@Component({
  selector: 'app-day-dialog',
  templateUrl: './day-dialog.component.html',
  styleUrls: ['./day-dialog.component.scss']
})
export class DayDialogComponent {

  hasNavigator = !!navigator.clipboard;

  constructor(protected dialogRef: MatDialogRef<DayDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: { day: number, document: DocumentModel }) {
  }

  getEncodedURL(): string {
    return encodeURIComponent(this.getURL());
  }

  copyUrl() {
    if (this.hasNavigator) {
      navigator.clipboard.writeText(this.getURL());
    }
  }

  close() {
    this.dialogRef.close();
  }

  private getURL(): string {
    return window.location.origin + window.location.pathname + '?day=' + this.data.day;
  }
}
