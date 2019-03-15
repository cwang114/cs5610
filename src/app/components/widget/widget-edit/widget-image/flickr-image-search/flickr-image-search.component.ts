import {Component, Input, OnInit} from '@angular/core';
import {FlickrService} from '../../../../../flickr.service';
import {Widget} from '../../../../../model/Widget';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../../widget.service';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  photos: any;
  searchText: String;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: Widget;
  photoResponse: any;
  constructor(private flickrService: FlickrService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) {
    this.photos = [];
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        // console.log(params);
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
      });
  }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe(
        val => {
          this.photoResponse = val;
        }
      );
    console.log("val is " + this.photoResponse);
    this.photoResponse = this.photoResponse.replace("jsonFlickrApi(", "").substring(0, this.photoResponse.length - 1);
    this.photoResponse = JSON.parse(this.photoResponse);
    console.log(this.photoResponse);

  }
  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = { widgetId: this.widgetId, widgetType: 'IMAGE', pageId: this.pageId, url: url};
    this.widgetService.updateWidget(this.widgetId, widget).subscribe(
      () => this.goBack());
  }
  goBack() {
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);

  }
}
