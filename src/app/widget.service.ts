import { Injectable } from '@angular/core';
import {Widget} from './model/Widget';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  baseUrl = environment.baseUrl;
  pageApiUrl = '/api/page/';

  constructor(private http: HttpClient) { }
  constructFindUpdateDeleteUrl(pageId, widgetId) {
    return this.baseUrl + this.pageApiUrl + pageId + '/widget/' + widgetId;
  }
  createWidget(widget, pageId) {
    console.log('front widget service createWidget() called');
    return this.http.post<Widget>(
      this.baseUrl + this.pageApiUrl + pageId + '/widget',
      widget);
  }

  findWidgetsByPage(pageId): Observable<Widget[]> {
    console.log('front widget service findWidgetByPage() called');
    return this.http.get<Widget[]>(this.baseUrl + this.pageApiUrl + pageId + '/widget');

  }
  findWidgetById(pageId, widgetId) {
    console.log('front widget service findwidgetById() called');
    // Only need to call server's url to get the data.
    return this.http.get<Widget>(this.constructFindUpdateDeleteUrl(pageId, widgetId));

  }
  updateWidget(pageId, widgetId, widget) {
    console.log('front widget service updateWidget() called');
    return this.http.put<Widget>(this.constructFindUpdateDeleteUrl(pageId, widgetId), widget);
  }

  deleteWidget(pageId, widgetId) {
    console.log('front widget service deleteWidget() called');
    return this.http.delete<Widget>(this.constructFindUpdateDeleteUrl(pageId, widgetId));
  }

  reorderWidgets(startIndex: Number, endIndex: Number, pageId, widgets): Observable<Widget[]> {
    console.log('front widget service reorder Widget() called');
    return this.http.put<Widget[]>(this.baseUrl + this.pageApiUrl + pageId +
      '/widget?initial=' + startIndex +
      '&final=' + endIndex, widgets);

  }
}
