import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetHeaderComponent } from './widget-header/widget-header.component';
import { WidgetImageComponent } from './widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './widget-youtube/widget-youtube.component';
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
    WidgetYoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
