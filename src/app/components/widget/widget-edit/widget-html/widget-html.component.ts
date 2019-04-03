import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Widget} from '../../../../model/Widget';
import {WidgetService} from '../../../../services/widget.service';
import {Router} from '@angular/router';
import { QuillModule } from 'ngx-quill';


@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

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
    const name = this.widgetForm.value.newName;
    this.widget.text = text;
    this.widget.name = name;
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
  displayWidgetName() {
    return this.widget.name;
  }
  displayWidgetText() {
    return this.widget.text;
  }

}
