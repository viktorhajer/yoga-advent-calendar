/*
* File: dialog.component.ts
* Project: AI Maestro
* File Created: 2021.02.24. 11:32:29
* Author: By Siemens AG - DI FA AS DA
* -----
* Copyright (C) Siemens AG 2021. All Rights Reserved. Confidential.
*/

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
