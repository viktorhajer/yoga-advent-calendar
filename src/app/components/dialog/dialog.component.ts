import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DocumentModel} from '../../models/document.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(protected dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: { day: number, document: DocumentModel }) {
  }

  close() {
    this.dialogRef.close();
  }
}
