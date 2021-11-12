export class DocumentModel {
  title = '';
  description ?= '';
  author ?= '';
  src ?= '';
  image ?= '';
  paragraphs?: string[] = [];
}
