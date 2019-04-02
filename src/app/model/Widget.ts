export class Widget {
  _id: String;
  type: String;
  pageId: String;
  size: Number;
  url: String;
  width: String;
  name: String;
  text: String;
  placeHolder: String;
  title: String;
  description: String;
  height: String;
  rows: Number;
  class: String;
  icon: String;
  deletable: Boolean;
  formatted: Boolean;

  constructor(type: String, pageId: String, size: Number, url: String, width: String, name: String, text: String) {
    this.type = type;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
    this.name = name;
    this.text = text;
    this.rows = 0;
    this.deletable = true;
    this.formatted = false;
  }
}
