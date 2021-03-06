import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Widget} from 'src/app/model/Widget';
import {Router} from '@angular/router';
import {WidgetService} from 'src/app/services/widget.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;
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
    const text = this.widgetForm.value.newText;
    const size = +(this.widgetForm.value.newSize);
    this.widget.text = text;
    this.widget.size = size;
    this.widgetService.updateWidget(this.pageId, this.widget._id, this.widget).subscribe(
      (widget) => {
        console.log('update widget called in front end' + widget);
        this.goBack();
      }
    );

  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.pageId, this.widget._id).subscribe(
      () => this.goBack()
    );

  }
  displayWidgetText() {
    return this.widget.text;
  }
  displayWidgetSize() {
    return this.widget.size.toString();
  }

}
