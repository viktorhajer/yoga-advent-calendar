import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DocumentModel} from '../../models/document.model';
import {DocumentSequenceModel} from '../../models/document-sequence.model';
import {DialogService} from '../../services/dialog.service';

@Component({
  selector: 'app-document-dialog',
  templateUrl: './document-dialog.component.html',
  styleUrls: ['./document-dialog.component.scss']
})
export class DocumentDialogComponent {

  hasNavigator = !!navigator.clipboard;
  loaded = false;

  constructor(protected dialogRef: MatDialogRef<DocumentDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: { index: number, document: DocumentModel, sequence: DocumentSequenceModel },
              private readonly dialogService: DialogService) {
  }

  imageLoaded() {
    this.loaded = true;
  }

  getEncodedURL(): string {
    return encodeURIComponent(this.getURL());
  }

  copyUrl() {
    if (this.hasNavigator) {
      navigator.clipboard.writeText(this.getURL());
    }
  }

  openDocument(index: number, document: DocumentModel) {
    this.dialogService.openDocument(index, document);
  }

  close() {
    this.dialogRef.close();
  }

  private getURL(): string {
    return window.location.origin + window.location.pathname + '?day=' + this.data.index;
  }
}
