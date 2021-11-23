import {DocumentModel} from './document.model';

export class DocumentSequenceModel {
  title = '';
  description = '';
  documents: DocumentModel[] = [];
}
