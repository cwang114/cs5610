import { Injectable } from '@angular/core';
import {Website} from '../model/Website';

import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  baseUrl = environment.baseUrl;
  userApiUrl = '/api/user/';

  constructor(private http: HttpClient) { }

  constructFindUpdateDeleteUrl(userId, websiteId) {
    return this.baseUrl + this.userApiUrl + userId + '/website/' + websiteId;
  }
  createWebsite(website, userId) {
    console.log('front website service createWebsite() called');
    // '/api/user/:userId/website'
    return this.http.post<Website>(
      this.baseUrl + this.userApiUrl + userId + '/website', website);
  }

  findWebsitesByUser(userId): Observable<Website[]> {
    console.log('front website service findWebsiteByUser() called');
    // '/api/user/:userId/website'
    return this.http.get<Website[]>(this.baseUrl + this.userApiUrl + userId + '/website');

  }
  findWebsiteById(userId, websiteId) {
    console.log('front website service findwebsiteById() called');
    // Only need to call server's url to get the data.
    // '/api/user/:userId/website/:websiteId'
    return this.http.get<Website>(this.constructFindUpdateDeleteUrl(userId, websiteId));


  }

  updateWebsite(userId, websiteId, website) {
    console.log('front website service updateWebsite() called');
    // '/api/user/:userId/website/:websiteId'
    return this.http.put<Website>(this.constructFindUpdateDeleteUrl(userId, websiteId), website);
  }

  deleteWebsite(userId, websiteId) {
    console.log('front website service deleteWebsite() called');
    // '/api/user/:userId/website/:websiteId'
    return this.http.delete<Website>(this.constructFindUpdateDeleteUrl(userId, websiteId));
  }

}
