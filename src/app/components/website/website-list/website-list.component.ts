import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from 'src/app/services/website.service';
import {Website} from 'src/app/model/Website';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})

export class WebsiteListComponent implements OnInit {

  userId: String;
  websites: Website[];

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userId = params['uid'];
      });
    this.websiteService.findWebsitesByUser(this.userId).subscribe(
      websites => {
        this.websites = websites;
        // console.log(this.websites);
      }
    );
  }

  goBack() {
    this.router.navigate(['/user', this.userId]);
  }

  createNewWebsite() {
    this.router.navigate(['/user', this.userId, 'website', 'new']);
  }

  goToEditWebsite(websiteId) {
    this.router.navigate(['/user', this.userId, 'website', websiteId]);
  }

  goToPageList(websiteId) {
    this.router.navigate(['/user', this.userId, 'website', websiteId, 'page']);
  }


}
