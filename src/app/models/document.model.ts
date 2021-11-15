export class DocumentModel {
  title = '';
  type ?= ''
  src ?= '';
  image ?= '';
  paragraphs?: {c: string, nl: boolean}[] = [];
  moreInfo?: string[] = [];
  contraindication ?= '';
}
