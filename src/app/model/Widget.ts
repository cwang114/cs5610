export class Widget {
  _id: String;
  type: String;
  pageId: String;
  size: Number;
  text: String;
  url: String;
  width: String;

  constructor(type, pageId, size, text, width, url) {
    this.type = type;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
    this.text = text;
  }
}
