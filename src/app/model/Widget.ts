export class Widget {
  _id: String;
  type: String;
  pageId: String;
  size: Number;
  text: String;
  url: String;
  width: String;

  constructor(type, pageId, size= 1, text = 'text', width = '100%', url = 'url') {
    this.type = type;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
    this.text = text;
  }
}
