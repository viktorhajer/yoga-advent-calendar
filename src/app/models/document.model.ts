export class DocumentModel {
  title = '';
  type ? = '';
  src ? = '';
  image ?: { src: string, dir: string };
  content?: string = '';
  contraindication ? = '';
}
