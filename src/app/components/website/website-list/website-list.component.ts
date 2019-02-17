import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {WebsiteService} from 'src/app/website.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css'] })

export class WebsiteListComponent implements OnInit {

  userId : String;
  websites = [{}];

  constructor(private _websiteService : WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( (params: any) => { this.userId = params['uid']});
    // this.websites = WebsiteService.findWebsitesByUser(this.userId);
  }

}
