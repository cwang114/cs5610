import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Page} from 'src/app/model/Page';
import {PageService} from 'src/app/services/page.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('f') pageForm: NgForm;
  oldPage: Page;
  websiteId: String;
  userId: String;
  pageId: String;
  constructor(private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.oldPage = new Page('', '', '');

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        // console.log(params);
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
      });
    this.pageService.findPageById(this.websiteId, this.pageId).subscribe(
      page => this.oldPage = page
    );
  }

  updatePage() {
    const newName = this.pageForm.value.pageName;
    const newTitle = this.pageForm.value.pageTitle;
    const page = new Page(newName, this.websiteId, newTitle);
    this.pageService.updatePage(this.websiteId, this.pageId, page).subscribe(
      () => this.goBack()
    );
  }
  deletePage() {
    this.pageService.deletePage(this.websiteId, this.pageId).subscribe(
      () => this.goBack()
    );
  }
  goBack() {
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
  }
  displayOldName() {
    return this.oldPage.name;
  }
  displayOldTitle() {
    return this.oldPage.title;
  }

}
