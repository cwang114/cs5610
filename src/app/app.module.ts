import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {LoginComponent} from './components/user/login/login.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './components/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {UserService} from './services/user.service';
import {WebsiteService} from './services/website.service';
import {PageService} from './services/page.service';
import {WidgetService} from './services/widget.service';
import {RouterModule} from '@angular/router';
import {ProfilebarComponent} from './components/profilebar/profilebar.component';
import {HttpClientModule} from '@angular/common/http';
import { SortableDirective } from './services/sortable.directive';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {FlickrService} from './services/flickr.service';
import { QuillModule } from 'ngx-quill';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import {AuthGuard} from './services/auth-guard.service';
import {SharedService} from './services/shared.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageListComponent,
    PageEditComponent,
    PageNewComponent,
    WidgetListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    ProfilebarComponent,
    SortableDirective,
    FlickrImageSearchComponent,
    WidgetHtmlComponent,
    WidgetTextComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    QuillModule
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, FlickrService, AuthGuard, SharedService],
  bootstrap: [AppComponent]
})
// @NgModule({
//   imports: [WebsiteListComponent],
//   declarations: [WebsiteNewComponent],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }
