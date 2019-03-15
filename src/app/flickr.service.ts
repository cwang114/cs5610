import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  key = 'cdd9cd0a484bf17de077345955ee8ee7';
  secret = 'cc8b43548165c919';
  flickerUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private http: HttpClient) {
  }

  searchPhotos(searchTerm: any) {
    const url = this.flickerUrl
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this.http.get(url);
  }
}
