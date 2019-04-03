import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Page} from '../model/Page';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  baseUrl = environment.baseUrl;
  websiteApiUrl = '/api/website/';

  constructor(private http: HttpClient) { }
  constructFindUpdateDeleteUrl(websiteId, pageId) {
    return this.baseUrl + this.websiteApiUrl + websiteId + '/page/' + pageId;
  }

  createPage(page, websiteId) {
    console.log('front page service createPage() called');
    return this.http.post<Page>(
      this.baseUrl + this.websiteApiUrl + websiteId + '/page',
      page);
  }

  findPagesByWebsite(websiteId): Observable<Page[]> {
    console.log('front page service findPageByWebsite() called');
    // '/api/website/:websiteId/page'
    return this.http.get<Page[]>(this.baseUrl + this.websiteApiUrl + websiteId + '/page');

  }
  findPageById(websiteId, pageId) {
    console.log('front page service findpageById() called');
    // Only need to call server's url to get the data.
    // '/api/website/:websiteId/page/:pageId'
    return this.http.get<Page>(this.constructFindUpdateDeleteUrl(websiteId, pageId));


  }

  updatePage(websiteId, pageId, page) {
    console.log('front page service updatePage() called');
    // '/api/website/:websiteId/page/:pageId'
    return this.http.put<Page>(this.constructFindUpdateDeleteUrl(websiteId, pageId), page);
  }

  deletePage(websiteId, pageId) {
    console.log('front page service deletePage() called');
    // '/api/website/:websiteId/page/:pageId'
    return this.http.delete<Page>(this.constructFindUpdateDeleteUrl(websiteId, pageId));
  }
}
