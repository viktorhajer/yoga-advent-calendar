export class DocumentModel {
  title = '';
  type ? = '';
  src ? = '';
  image ?: { src: string, dir: string };
  paragraphs?: { c: string, nl: boolean }[] = [];
  moreInfo?: string[] = [];
  contraindication ? = '';
}
