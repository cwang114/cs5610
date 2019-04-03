import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../model/Widget';
import {WidgetService} from '../../../../services/widget.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  // @ViewChild('f') widgetForm: NgForm;
  @Input() userId: String;
  @Input() websiteId: String;
  @Input() pageId: String;
  @Input() widgetId: String;
  @Input() widget: Widget;
  constructor(private widgetService: WidgetService, private router: Router) { }


  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);

  }
  updateWidget() {
    // const text = this.widgetForm.value.newText;
    // const url = this.widgetForm.value.newUrl;
    // const width = this.widgetForm.value.newWidth;
    // this.widget.text = text;
    // this.widget.url = url;
    // this.widget.width = width;
    this.widgetService.updateWidget(this.pageId, this.widget._id, this.widget).subscribe(
      () => this.goBack()
    );

  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.pageId, this.widget._id).subscribe(
      () => this.goBack());
  }
  displayWidgetText() {
    return this.widget.text;
  }
  displayWidgetWidth() {
    return this.widget.width;
  }
  displayWidgetUrl() {
    return this.widget.url;
  }

}
