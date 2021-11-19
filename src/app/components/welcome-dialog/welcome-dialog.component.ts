import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {GOD_MODE} from '../../app.constant';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss']
})
export class WelcomeDialogComponent {

  days = 0;
  hours = 0;

  constructor(protected dialogRef: MatDialogRef<WelcomeDialogComponent>) {
    if (new Date('2021-12-01').getTime() >= new Date().getTime()) {
      const diff = new Date('2021-12-01').getTime() - new Date().getTime();
      const hh = Math.floor(diff / 1000 / 60 / 60);
      this.days = Math.floor(hh / 24);
      this.hours = hh - (24 * this.days);
    }
  }

  close() {
    if (GOD_MODE) {
      this.dialogRef.close();
    }
  }
}
