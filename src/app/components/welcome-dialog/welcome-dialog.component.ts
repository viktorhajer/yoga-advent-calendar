import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {START_TIME, WELCOME_DIALOG_CONTENT, WELCOME_DIALOG_TITLE} from '../../content.constant';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss']
})
export class WelcomeDialogComponent {
  title = WELCOME_DIALOG_TITLE;
  content = WELCOME_DIALOG_CONTENT;
  days = 0;
  hours = 0;

  constructor(protected dialogRef: MatDialogRef<WelcomeDialogComponent>) {
    if (new Date(START_TIME).getTime() >= new Date().getTime()) {
      const diff = new Date(START_TIME).getTime() - new Date().getTime();
      const hh = Math.floor(diff / 1000 / 60 / 60);
      this.days = Math.floor(hh / 24);
      this.hours = hh - (24 * this.days);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
