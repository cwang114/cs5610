import { Component, OnInit } from '@angular/core';
import {WebsiteService} from 'src/app/website.service';
import {Website} from 'src/app/model/Website';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: String;
  name: String;
  description: String;

  constructor(private websiteService : WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe( (params: any) => { this.userId = params['uid']});
  }
  saveWebsite() {
    let website = new Website("", this.name, this.userId, this.description);
    this.websiteService.createWebsite(website);
    this.router.navigate(['/user', this.userId, 'website']);

  }


}
