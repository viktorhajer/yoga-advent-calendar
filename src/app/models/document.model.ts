export class DocumentModel {
  title = '';
  description ? = '';
  type ? = '';
  src ? = '';
  image ?: { src: string, dir: string };
  content?: string = '';
}
