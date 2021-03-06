(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");

















// define the routings
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'user/:uid', component: _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'user/:uid/website', component: _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__["FlickrImageSearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--main page-->\n\n<!--make all the routing before writing everything-->\n<!--<div style=\"text-align:center\">-->\n  <!--<h1>-->\n    <!--CS 5610 initial angular project!-->\n  <!--</h1>-->\n  <!--<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">-->\n<!--</div>-->\n\n<!--<h2>Here are some links to help you start: </h2>-->\n<!--<ul>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>-->\n  <!--</li>-->\n  <!--<li>-->\n    <!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>-->\n  <!--</li>-->\n<!--</ul>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
/* harmony import */ var _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page/page-new/page-new.component */ "./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page-edit/page-edit.component */ "./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page-list/page-list.component */ "./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/website/website-edit/website-edit.component */ "./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/website/website-new/website-new.component */ "./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/website/website-list/website-list.component */ "./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/profile/profile.component */ "./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
/* harmony import */ var _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget/widget-list/widget-list.component */ "./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/widget/widget-chooser/widget-chooser.component */ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-edit.component */ "./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-header/widget-header.component */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/widget-image.component */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_website_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/website.service */ "./src/app/services/website.service.ts");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service */ "./src/app/services/page.service.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_profilebar_profilebar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/profilebar/profilebar.component */ "./src/app/components/profilebar/profilebar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_sortable_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/sortable.directive */ "./src/app/services/sortable.directive.ts");
/* harmony import */ var _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_flickr_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/flickr.service */ "./src/app/services/flickr.service.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-html/widget-html.component */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/widget/widget-edit/widget-text/widget-text.component */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");




































var AppModule = /** @class */ (function () {
    // @NgModule({
    //   imports: [WebsiteListComponent],
    //   declarations: [WebsiteNewComponent],
    //   providers: [],
    //   bootstrap: [AppComponent]
    // })
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteListComponent"],
                _components_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteNewComponent"],
                _components_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteEditComponent"],
                _components_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"],
                _components_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_8__["PageEditComponent"],
                _components_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_7__["PageNewComponent"],
                _components_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"],
                _components_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_16__["WidgetChooserComponent"],
                _components_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_17__["WidgetEditComponent"],
                _components_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
                _components_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
                _components_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
                _components_profilebar_profilebar_component__WEBPACK_IMPORTED_MODULE_26__["ProfilebarComponent"],
                _services_sortable_directive__WEBPACK_IMPORTED_MODULE_28__["SortableDirective"],
                _components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_29__["FlickrImageSearchComponent"],
                _components_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_32__["WidgetHtmlComponent"],
                _components_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_33__["WidgetTextComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_31__["QuillModule"]
            ],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_website_service__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _services_page_service__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_widget_service__WEBPACK_IMPORTED_MODULE_24__["WidgetService"], _services_flickr_service__WEBPACK_IMPORTED_MODULE_30__["FlickrService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_34__["AuthGuard"], _services_shared_service__WEBPACK_IMPORTED_MODULE_35__["SharedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
        // @NgModule({
        //   imports: [WebsiteListComponent],
        //   declarations: [WebsiteNewComponent],
        //   providers: [],
        //   bootstrap: [AppComponent]
        // })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWVkaXQvcGFnZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Edit Page</span>\n\n  <a class=\"ml-auto\" (click)=\"updatePage()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n  </a>\n</nav>\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"pagename\" class=\"font-weight-bold\">Name</label>\n      <input id=\"pagename\"\n             name=\"pageName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Page Name\"\n             [ngModel]=\"displayOldName()\"\n             ngModel\n             #pageName=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"pagetitle\" class=\"font-weight-bold\">Title</label>\n      <input id=\"pagetitle\"\n             name=\"pageTitle\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Page Title\"\n             [ngModel]=\"displayOldTitle()\"\n             ngModel\n             #pageTitle=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deletePage()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-edit/page-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Page */ "./src/app/model/Page.ts");
/* harmony import */ var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/page.service */ "./src/app/services/page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.oldPage = new src_app_model_Page__WEBPACK_IMPORTED_MODULE_3__["Page"]('', '', '');
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            // console.log(params);
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.pageService.findPageById(this.websiteId, this.pageId).subscribe(function (page) { return _this.oldPage = page; });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        var newName = this.pageForm.value.pageName;
        var newTitle = this.pageForm.value.pageTitle;
        var page = new src_app_model_Page__WEBPACK_IMPORTED_MODULE_3__["Page"](newName, this.websiteId, newTitle);
        this.pageService.updatePage(this.websiteId, this.pageId, page).subscribe(function () { return _this.goBack(); });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.websiteId, this.pageId).subscribe(function () { return _this.goBack(); });
    };
    PageEditComponent.prototype.goBack = function () {
        this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page']);
    };
    PageEditComponent.prototype.displayOldName = function () {
        return this.oldPage.name;
    };
    PageEditComponent.prototype.displayOldTitle = function () {
        return this.oldPage.title;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_page_service__WEBPACK_IMPORTED_MODULE_4__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UtbGlzdC9wYWdlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLWxpc3QvcGFnZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFyayB7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n\n  <!--Go back to website-list-->\n  <a (click)=\"goBack()\" >\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Pages</span>\n\n  <a (click)=\"createNewPage()\" class=\"ml-auto\">\n    <span>\n      <i class=\"fas fa-plus dark\"></i>\n    </span>\n  </a>\n</nav>\n\n<div class=\"container-fluid scrollable-body\"\n     *ngFor=\"let page of pages\">\n  <table class=\"table table-borderless\">\n    <tbody>\n    <tr>\n      <td>\n        <div (click)=\"goToWidgetList(page._id)\">{{page.name}}</div>\n      </td>\n      <td align=\"right\">\n        <a (click)=\"goToEditPage(page._id)\" ><i class=\"fas fa-cog\"></i></a>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div> <!-- container-fluid.// -->\n\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-list/page-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/page.service */ "./src/app/services/page.service.ts");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(activatedRoute, router, pageService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pageService = pageService;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.pageService.findPagesByWebsite(this.websiteId).subscribe(function (pages) { return _this.pages = pages; });
        // console.log(this.pages);
    };
    PageListComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website']);
    };
    PageListComponent.prototype.createNewPage = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    PageListComponent.prototype.goToEditPage = function (pageId) {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', pageId]);
    };
    PageListComponent.prototype.goToWidgetList = function (pageId) {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', pageId, 'widget']);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/components/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLW5ldy9wYWdlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">New Page</span>\n\n  <a class=\"ml-auto\" (click)=\"savePage()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n  </a>\n</nav>\n\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"pagename\" class=\"font-weight-bold\">Name</label>\n      <input id=\"pagename\"\n             name=\"pageName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Page Name\"\n             ngModel\n             #pageName=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"pagetitle\" class=\"font-weight-bold\">Title</label>\n      <input id=\"pagetitle\"\n             name=\"pageTitle\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Page Title\"\n             ngModel\n             #pageTitle=\"ngModel\">\n    </div> <!-- form-group// -->\n  </form>\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/page/page-new/page-new.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/page.service */ "./src/app/services/page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Page */ "./src/app/model/Page.ts");






var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent.prototype.savePage = function () {
        var _this = this;
        var name = this.pageForm.value.pageName;
        var title = this.pageForm.value.pageTitle;
        var page = new src_app_model_Page__WEBPACK_IMPORTED_MODULE_5__["Page"](name, this.websiteId, title);
        this.pageService.createPage(page, this.websiteId).subscribe(function (page) { return _this.goBack(); });
    };
    PageNewComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/components/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/profilebar/profilebar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/profilebar/profilebar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZWJhci9wcm9maWxlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profilebar/profilebar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/profilebar/profilebar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\n\n  <a class=\"ml-auto\" (click)=\"goToProfile(curUserId)\">\n  <span>\n    <i class=\"fas fa-user fa-inverse\"></i>\n  </span>\n  </a>\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/profilebar/profilebar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/profilebar/profilebar.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfilebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilebarComponent", function() { return ProfilebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfilebarComponent = /** @class */ (function () {
    function ProfilebarComponent(router) {
        this.router = router;
    }
    ProfilebarComponent.prototype.ngOnInit = function () {
    };
    ProfilebarComponent.prototype.goToProfile = function (userId) {
        this.router.navigate(['/user', userId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProfilebarComponent.prototype, "curUserId", void 0);
    ProfilebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profilebar',
            template: __webpack_require__(/*! ./profilebar.component.html */ "./src/app/components/profilebar/profilebar.component.html"),
            styles: [__webpack_require__(/*! ./profilebar.component.css */ "./src/app/components/profilebar/profilebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfilebarComponent);
    return ProfilebarComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/user/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/user/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{errorMsg}}}</div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div> <!-- form-group// -->\n    <div class =\"help-block\" *ngIf=\"!username.valid && username.touched\">Please enter a username</div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\"\n              class=\"btn btn-primary btn-block\"\n              type=\"submit\">Login</button>\n    </div>\n    <div class=\"form-group\">\n      <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\">\n        <span class=\"fa fa-facebook\"></span> Facebook\n      </a>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-success btn-block\" routerLink=\"/register\" role=\"button\">Register</a>\n    </div>\n  </form>\n\n</div> <!-- container-fluid.// -->\n\n\n<!--{{username}}}-->\n<!--<input [(ngModel)]=\"username\" type=\"text\" name=\"username\" placeholder=\"Alice\"/>-->\n<!--<button class=\"btn btn-primary btn-block\" (click)=\"login()\">Login</button>-->\n<!--<a class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</a>-->\n\n\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/user/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        // this.userService.findUserByCredentials(username, password)
        //   .subscribe(
        //     (user: User) => {
        //       if (user) {
        //         console.log(user);
        //         this.router.navigate(['/user', user._id]);
        //       } else {
        //         this.errorFlag = true;
        //         this.errorMsg = 'Login Failed.';
        //       }
        //     }
        //   );
        // calling client side userservice to send login information
        // console.log('data', username);
        this.userService.login(username, password).subscribe(function (user) {
            // console.log('In login() component, the front end service returns: ' + user);
            _this.sharedService.user = user;
            _this.router.navigate(['/user', user._id]);
        }, function (error) {
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-dark bg-primary\">\n    <a class=\"navbar-brand font-weight-bold\" href=\"#\">Profile</a>\n  </nav>\n</div>\n\n<div class=\"container-fluid pt-2\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"usernameInput\" class=\"font-weight-bold\">Username</label>\n      <input name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"usernameInput\"\n             ngModel\n             [(ngModel)]=\"user.username\"\n             #username=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"email\" class=\"font-weight-bold\">Email</label>\n      <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"firstnameInput\" class=\"font-weight-bold\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\"\n             name=\"firstname\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"firstnameInput\"\n             ngModel\n             #firstname=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"lastnameInput\" class=\"font-weight-bold\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\"\n             name=\"lastname\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"lastnameInput\"\n             ngModel\n             #lastname=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary btn-block\"\n              (click)=\"saveAndDisplayWebsites()\">Websites</button>\n      <!--<a class=\"btn btn-primary btn-block\" type=\"submit\" role=\"button\">Websites</a>-->\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"logout()\" role=\"button\">Logout</a>\n    </div>\n  </form>\n\n</div> <!-- container-fluid.// -->\n\n\n\n\n<nav class=\"navbar navbar-dark bg-primary fixed-bottom p-3\">\n  <a class=\"navbar-brand font-weight-bold\" href=\"#\"></a>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/User */ "./src/app/model/User.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, outRouter) {
        this.userService = userService;
        this.router = router;
        this.outRouter = outRouter;
        this.user = new src_app_model_User__WEBPACK_IMPORTED_MODULE_4__["User"]('', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.router.snapshot.paramMap.get('uid');
        this.userService.findUserById(id)
            .subscribe(function (user) { return _this.user = user; });
    };
    ProfileComponent.prototype.saveAndDisplayWebsites = function () {
        var _this = this;
        var username = this.profileForm.value.username;
        var firstname = this.profileForm.value.firstname;
        var lastname = this.profileForm.value.lastname;
        var newUser = new src_app_model_User__WEBPACK_IMPORTED_MODULE_4__["User"](username, this.user.password, firstname, lastname);
        this.userService.updateUser(this.user._id, newUser)
            .subscribe(function () { return _this.outRouter.navigate(['/user', _this.user._id, 'website']); });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) { return _this.outRouter.navigate(['/login']); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-5\">\n  <h1>Register</h1>\n  <form (ngSubmit)=\"createUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\"/>\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <input placeholder=\"verify password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\"\n              class=\"btn btn-primary btn-block\"\n              type=\"submit\">Register</button>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" routerLink=\"/login\" role=\"button\">Cancel</a>\n    </div>\n  </form>\n\n</div> <!-- container-fluid.// -->\n\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/User */ "./src/app/model/User.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        var username = this.registerForm.value.username;
        var password = this.registerForm.value.password;
        var user = new src_app_model_User__WEBPACK_IMPORTED_MODULE_5__["User"](username, password, '', '');
        // this.userService.createUser(user)
        //   .subscribe(
        //     (user) => this.router.navigate(['/user', user._id]));
        this.userService.register(username, password)
            .subscribe(function (user) {
            // console.log(data);
            _this.router.navigate(['/user', user._id]);
            return;
        }, function (error) {
            // this.error = error._body;
            console.log(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWVkaXQvd2Vic2l0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 d-none d-md-block border-right pr-0\">\n    <app-website-list></app-website-list>\n  </div>\n  <div class=\"col-md-8 pl-0\">\n    <nav class=\"navbar navbar-dark bg-primary\">\n      <div class=\"navbar-brand font-weight-bold\">Edit Website</div>\n      <a class=\"ml-auto\" (click)=\"updateWebsite()\" >\n            <span>\n              <i class=\"fas fa-check fa-inverse\"></i>\n            </span>\n      </a>\n    </nav>\n    <div class=\"container-fluid pt-2\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"font-weight-bold\">Website Name</label>\n          <input name=\"newName\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 id=\"name\"\n                 [ngModel]=\"displayOldName()\"\n                 ngModel\n                 #newName=\"ngModel\">\n        </div> <!-- form-group// -->\n\n        <div class=\"form-group\">\n          <label for=\"description\" class=\"font-weight-bold\">Website Description</label>\n          <textarea name=\"newDescription\"\n                    class=\"form-control\"\n                    id=\"description\"\n                    rows=\"5\"\n                    [ngModel]=\"displayOldDescription()\"\n                    ngModel\n                    #newDescription=\"ngModel\"></textarea>\n        </div> <!-- form-group// -->\n        <div class=\"form-group\">\n          <a class=\"btn btn-danger btn-block\" (click)=\"deleteWebsite()\" role=\"button\">Delete</a>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-edit/website-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_website_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/website.service */ "./src/app/services/website.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_Website__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Website */ "./src/app/model/Website.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.oldWebsite = new src_app_model_Website__WEBPACK_IMPORTED_MODULE_4__["Website"]('', '', '');
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            console.log(params);
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.websiteService.findWebsiteById(this.userId, this.websiteId)
            .subscribe(function (website) { return _this.oldWebsite = website; });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        var website = new src_app_model_Website__WEBPACK_IMPORTED_MODULE_4__["Website"](this.websiteForm.value.newName, this.userId, this.websiteForm.value.newDescription);
        this.websiteService.updateWebsite(this.userId, this.websiteId, website)
            .subscribe(function () { return _this.goBack(); });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.userId, this.websiteId).subscribe(function () { return _this.goBack(); });
    };
    WebsiteEditComponent.prototype.goBack = function () {
        this.router.navigate(['/user', this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.displayOldName = function () {
        return this.oldWebsite.name;
    };
    WebsiteEditComponent.prototype.displayOldDescription = function () {
        return this.oldWebsite.description;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_website_service__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollable-body{\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.body {\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlL3dlYnNpdGUtbGlzdC93ZWJzaXRlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLWxpc3Qvd2Vic2l0ZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYWJsZS1ib2R5e1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary\">\n\n  <a (click)=\"goBack()\" >\n    <span>\n      <i class=\"fas fa-chevron-left fa-inverse\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3\">Websites</span>\n\n  <a (click)=\"createNewWebsite()\" class=\"ml-auto\">\n    <span>\n      <i class=\"fas fa-plus fa-inverse\"></i>\n    </span>\n  </a>\n</nav>\n\n<div class=\"container-fluid scrollable-body\"\n     *ngFor=\"let website of websites\">\n  <table class=\"table table-borderless\">\n    <tbody>\n    <tr>\n      <td>\n        <div (click)=\"goToPageList(website._id)\">{{website.name}}</div>\n      </td>\n      <td align=\"right\">\n        <a (click)=\"goToEditWebsite(website._id)\" ><i class=\"fas fa-cog\"></i></a>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div> <!-- container-fluid.// -->\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-list/website-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_website_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/website.service */ "./src/app/services/website.service.ts");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findWebsitesByUser(this.userId).subscribe(function (websites) {
            _this.websites = websites;
            // console.log(this.websites);
        });
    };
    WebsiteListComponent.prototype.goBack = function () {
        this.router.navigate(['/user', this.userId]);
    };
    WebsiteListComponent.prototype.createNewWebsite = function () {
        this.router.navigate(['/user', this.userId, 'website', 'new']);
    };
    WebsiteListComponent.prototype.goToEditWebsite = function (websiteId) {
        this.router.navigate(['/user', this.userId, 'website', websiteId]);
    };
    WebsiteListComponent.prototype.goToPageList = function (websiteId) {
        this.router.navigate(['/user', this.userId, 'website', websiteId, 'page']);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/components/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_website_service__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS93ZWJzaXRlLW5ldy93ZWJzaXRlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 d-none d-md-block border-right pr-0\">\n    <app-website-list></app-website-list>\n  </div>\n  <div class=\"col-md-8 pl-0\">\n    <nav class=\"navbar navbar-dark bg-primary\">\n      <div class=\"navbar-brand font-weight-bold\">New Website</div>\n        <a class=\"ml-auto\" (click)=\"saveWebsite()\" >\n            <span>\n              <i class=\"fas fa-check fa-inverse\"></i>\n            </span>\n        </a>\n    </nav>\n    <div class=\"container-fluid pt-2\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"font-weight-bold\">Name</label>\n          <input name=\"newName\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 id=\"name\"\n                 placeholder=\"Name\"\n                 ngModel\n                 #newName=\"ngModel\">\n        </div> <!-- form-group// -->\n\n        <div class=\"form-group\">\n          <label for=\"description\" class=\"font-weight-bold\">Description</label>\n          <textarea name=\"newDescription\"\n                    class=\"form-control\"\n                    id=\"description\"\n                    placeholder=\"Description\"\n                    rows=\"5\"\n                    ngModel\n                    #newDescription=\"ngModel\"></textarea>\n        </div> <!-- form-group// -->\n\n      </form>\n    </div>\n  </div>\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/website/website-new/website-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_website_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/website.service */ "./src/app/services/website.service.ts");
/* harmony import */ var src_app_model_Website__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Website */ "./src/app/model/Website.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) { _this.userId = params['uid']; });
    };
    WebsiteNewComponent.prototype.saveWebsite = function () {
        var _this = this;
        var website = new src_app_model_Website__WEBPACK_IMPORTED_MODULE_3__["Website"](this.websiteForm.value.newName, this.userId, this.websiteForm.value.newDescription);
        this.websiteService.createWebsite(website, this.userId).subscribe(function () { return _this.router.navigate(['/user', _this.userId, 'website']); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/components/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_website_service__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1jaG9vc2VyL3dpZGdldC1jaG9vc2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Choose Widget</span>\n\n</nav>\n\n<div class=\"container-fluid pt-2\">\n  <table class=\"table table-borderless\">\n    <tbody>\n    <tr>\n      <td>\n        <div><a (click)=\"goToHeader()\">Header</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Label</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a (click)=\"goToHtml()\">HTML</a></div>\n      </td>\n    </tr>\n\n\n    <tr>\n      <td>\n        <div><a (click)=\"goToText()\">Text Input</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Link</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Button</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a (click)=\"goToImage()\">Image</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a (click)=\"goToYoutube()\">YouTube</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Data Table</a></div>\n      </td>\n    </tr>\n\n    <tr>\n      <td>\n        <div><a href=\"#\">Repeater</a></div>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div> <!-- container-fluid.// -->\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/widget/widget-chooser/widget-chooser.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Widget */ "./src/app/model/Widget.ts");





var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, router, activatedRoute) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            // console.log(params);
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetChooserComponent.prototype.goToWidgetEdit = function (widget) {
        var _this = this;
        this.widgetService.createWidget(widget, this.pageId).subscribe(function (widget) {
            // console.log(widget);
            _this.router.navigate(['user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget', widget._id]);
        });
    };
    WidgetChooserComponent.prototype.goToHeader = function () {
        var widget = new src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__["Widget"]('HEADING', this.pageId, 0, '', '', '', '');
        this.goToWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.goToImage = function () {
        var widget = new src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__["Widget"]('IMAGE', this.pageId, 0, '', '', '', '');
        this.goToWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.goToYoutube = function () {
        var widget = new src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__["Widget"]('YOUTUBE', this.pageId, 0, '', '', '', '');
        this.goToWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.goToHtml = function () {
        var widget = new src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__["Widget"]('HTML', this.pageId, 0, '', '', '', '');
        this.goToWidgetEdit(widget);
    };
    WidgetChooserComponent.prototype.goToText = function () {
        var widget = new src_app_model_Widget__WEBPACK_IMPORTED_MODULE_4__["Widget"]('TEXT', this.pageId, 0, '', '', '', '');
        this.goToWidgetEdit(widget);
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.type\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header [widget]=\"widget\" [widgetId]=\"widgetId\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image [widget]=\"widget\" [widgetId]=\"widgetId\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube [widget]=\"widget\" [widgetId]=\"widgetId\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html [widget]=\"widget\" [widgetId]=\"widgetId\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-html>\n  </div>\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text [widget]=\"widget\" [widgetId]=\"widgetId\" [userId]=\"userId\" [websiteId]=\"websiteId\" [pageId]=\"pageId\"></app-widget-text>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Widget */ "./src/app/model/Widget.ts");
/* harmony import */ var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/widget.service */ "./src/app/services/widget.service.ts");





var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activatedRoute, router, widgetService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new src_app_model_Widget__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', '', 0, '', '', '', '');
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.pageId, this.widgetId).subscribe(function (widget) { return _this.widget = widget; });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_4__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark {\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWVkaXQvd2lkZ2V0LWhlYWRlci93aWRnZXQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n  <a class=\"ml-auto\" (click)=\"updateWidget()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n  </a>\n</nav>\n\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"headername\" class=\"font-weight-bold\">Name</label>\n      <input id=\"headername\"\n             name=\"newName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Name\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"headertext\" class=\"font-weight-bold\">Text</label>\n      <input id=\"headertext\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Text\"\n             name=\"newText\"\n             [ngModel]=\"displayWidgetText()\"\n             ngModel\n             #newText=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"headersize\" class=\"font-weight-bold\">Size</label>\n      <input id=\"headersize\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Size\"\n             name=\"newSize\"\n             [ngModel]=\"displayWidgetSize()\"\n             ngModel\n             #newSize=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WidgetHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Widget */ "./src/app/model/Widget.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    WidgetHeaderComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        var text = this.widgetForm.value.newText;
        var size = +(this.widgetForm.value.newSize);
        this.widget.text = text;
        this.widget.size = size;
        this.widgetService.updateWidget(this.pageId, this.widget._id, this.widget).subscribe(function (widget) {
            console.log('update widget called in front end' + widget);
            _this.goBack();
        });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.pageId, this.widget._id).subscribe(function () { return _this.goBack(); });
    };
    WidgetHeaderComponent.prototype.displayWidgetText = function () {
        return this.widget.text;
    };
    WidgetHeaderComponent.prototype.displayWidgetSize = function () {
        return this.widget.size.toString();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHeaderComponent.prototype, "widgetId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_Widget__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], WidgetHeaderComponent.prototype, "widget", void 0);
    WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-header',
            template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1odG1sL3dpZGdldC1odG1sLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n  <a class=\"ml-auto\" (click)=\"updateWidget()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n  </a>\n</nav>\n\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"headername\" class=\"font-weight-bold\">Name</label>\n      <input id=\"headername\"\n             name=\"newName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Widget Name\"\n             [ngModel]=\"displayWidgetName()\"\n             #newName=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <quill-editor [(ngModel)]=\"widget.text\" name=\"newText\"></quill-editor>\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/Widget */ "./src/app/model/Widget.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
    };
    WidgetHtmlComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        var text = this.widgetForm.value.newText;
        var name = this.widgetForm.value.newName;
        this.widget.text = text;
        this.widget.name = name;
        this.widgetService.updateWidget(this.pageId, this.widget._id, this.widget).subscribe(function (widget) {
            console.log('update widget called in front end' + widget);
            _this.goBack();
        });
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.pageId, this.widget._id).subscribe(function () { return _this.goBack(); });
    };
    WidgetHtmlComponent.prototype.displayWidgetName = function () {
        return this.widget.name;
    };
    WidgetHtmlComponent.prototype.displayWidgetText = function () {
        return this.widget.text;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WidgetHtmlComponent.prototype, "widgetForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHtmlComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHtmlComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHtmlComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetHtmlComponent.prototype, "widgetId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_Widget__WEBPACK_IMPORTED_MODULE_3__["Widget"])
    ], WidgetHtmlComponent.prototype, "widget", void 0);
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS9mbGlja3ItaW1hZ2Utc2VhcmNoL2ZsaWNrci1pbWFnZS1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Search Flickr</span>\n\n</nav>\n\n<div class=\"input-group\">\n  <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n  <span class=\"input-group-btn\">\n    <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n      <span class=\"glyphicon glyphicon-search\">\n\n      </span>\n    </a>\n  </span>\n</div>\n\n<div class=\"row\">\n  <div *ngFor = \"let pic of photos['photo']\" class=\"col-xs-4\">\n    <img (click)=\"selectPhoto(pic)\" width=\"100%\" [src] = \"['https://farm' +\n    pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_m.jpg']\"/>\n  <p></p>\n  </div>\n</div>\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: FlickrImageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrImageSearchComponent", function() { return FlickrImageSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/flickr.service */ "./src/app/services/flickr.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/widget.service */ "./src/app/services/widget.service.ts");





var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, activatedRoute, router, widgetService) {
        this.flickrService = flickrService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgetService = widgetService;
        this.photos = {};
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            // console.log(params);
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.pageId, this.widgetId).subscribe(function (widget) { return _this.widget = widget; });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (val) {
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1); // remove the last parenthese
            var fasdf = JSON.parse(val);
            _this.photos = fasdf.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_m.jpg';
        this.widget.url = url;
        this.widgetService.updateWidget(this.pageId, this.widgetId, this.widget).subscribe(function () { return _this.goBack(); });
    };
    FlickrImageSearchComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_flickr_service__WEBPACK_IMPORTED_MODULE_2__["FlickrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_widget_service__WEBPACK_IMPORTED_MODULE_4__["WidgetService"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC1pbWFnZS93aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n  <a class=\"ml-auto\" (click)=\"updateWidget()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n  </a>\n</nav>\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"imagename\" class=\"font-weight-bold\">Name</label>\n      <input id=\"imagename\"\n             name=\"newName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Name\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"imagetext\" class=\"font-weight-bold\">Text</label>\n      <input id=\"imagetext\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Image Text\"\n             name=\"newText\"\n             [ngModel]=\"displayWidgetText()\"\n             ngModel\n             #newText=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"imageurl\" class=\"font-weight-bold\">URL</label>\n      <input id=\"imageurl\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Image URL\"\n             name=\"newUrl\"\n             [ngModel]=\"displayWidgetUrl()\"\n             ngModel\n             #newUrl=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"imagewidth\" class=\"font-weight-bold\">Width</label>\n      <input id=\"imagewidth\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Image Width\"\n             name=\"newWidth\"\n             [ngModel]=\"displayWidgetWidth()\"\n             ngModel\n             #newWidth=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"fileToUpload\" class=\"font-weight-bold\">Upload</label>\n    </div>\n\n\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input id=\"fileToUpload\" name=\"imageAdded\" type=\"file\" class=\"form-control\"/>\n      <input name=\"widgetId\" value=\"{{widgetId}}\" style=\"display: none\"/>\n      <input name=\"websiteId\" value=\"{{websiteId}}\" style=\"display: none\"/>\n      <input name=\"pageId\" value=\"{{pageId}}\" style=\"display: none\"/>\n      <input name=\"userId\" value=\"{{userId}}\" style=\"display: none\"/>\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n      <br/>\n    </form>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-success btn-block\" (click)=\"goToFlickrSearch()\" role=\"button\">Flickr!</a>\n    </div>\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n\n</div>\n\n<div class=\"p-3\">\n\n</div>\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Widget */ "./src/app/model/Widget.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");







var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    WidgetImageComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.goToFlickrSearch = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId, 'flickr']);
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        var text = this.widgetForm.value.newText;
        var url = this.widgetForm.value.newUrl;
        var width = this.widgetForm.value.newWidth;
        this.widget.text = text;
        this.widget.url = url;
        this.widget.width = width;
        this.widgetService.updateWidget(this.pageId, this.widget._id, this.widget).subscribe(function () { return _this.goBack(); });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.pageId, this.widget._id).subscribe(function () { return _this.goBack(); });
    };
    WidgetImageComponent.prototype.displayWidgetText = function () {
        return this.widget.text;
    };
    WidgetImageComponent.prototype.displayWidgetWidth = function () {
        return this.widget.width;
    };
    WidgetImageComponent.prototype.displayWidgetUrl = function () {
        return this.widget.url;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WidgetImageComponent.prototype, "widgetForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetImageComponent.prototype, "widgetId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_Widget__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], WidgetImageComponent.prototype, "widget", void 0);
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC10ZXh0L3dpZGdldC10ZXh0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n  <a class=\"ml-auto\" (click)=\"updateWidget()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n  </a>\n</nav>\n\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n\n  <!--<form #f=\"ngForm\">-->\n    <!--<div class=\"form-group\">-->\n      <!--<label for=\"headername\" class=\"font-weight-bold\">Name</label>-->\n      <!--<input id=\"headername\"-->\n             <!--name=\"newName\"-->\n             <!--type=\"text\"-->\n             <!--class=\"form-control\"-->\n             <!--placeholder=\"Widget Name\"-->\n             <!--[ngModel]=\"displayWidgetName()\"-->\n             <!--#newName=\"ngModel\">-->\n    <!--</div> &lt;!&ndash; form-group// &ndash;&gt;-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<quill-editor [(ngModel)]=\"widget.text\" name=\"newText\"></quill-editor>-->\n    <!--</div> &lt;!&ndash; form-group// &ndash;&gt;-->\n\n    <!--<div class=\"form-group\">-->\n      <!--<a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>-->\n    <!--</div>-->\n  <!--</form>-->\n  Text\n  <input [(ngModel)]=\"widget.text\" class=\"form-control\"/>\n  Rows\n  <input [(ngModel)]=\"widget.rows\" class=\"form-control\" type=\"number\"/>\n  <label for=\"Name\">Name</label>\n  <div>\n    <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"Name\" name=\"name\" placeholder=\"Name\">\n  </div>\n  Placeholder\n  <input [(ngModel)]=\"widget.placeHolder\" class=\"form-control\" required/>\n  <p></p>\n  <div class=\"input-group\">\n    <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\"/>\n    <span class=\"input-group-addon\">\n      <input [(ngModel)]=\"widget.formatted\" type=\"checkbox\"/>\n    </span>\n  </div>\n\n  <div class=\"form-group\">\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n  </div>\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \************************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/Widget */ "./src/app/model/Widget.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
    };
    WidgetTextComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        // const text = this.widgetForm.value.newText;
        // const url = this.widgetForm.value.newUrl;
        // const width = this.widgetForm.value.newWidth;
        // this.widget.text = text;
        // this.widget.url = url;
        // this.widget.width = width;
        this.widgetService.updateWidget(this.pageId, this.widget._id, this.widget).subscribe(function () { return _this.goBack(); });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.pageId, this.widget._id).subscribe(function () { return _this.goBack(); });
    };
    WidgetTextComponent.prototype.displayWidgetText = function () {
        return this.widget.text;
    };
    WidgetTextComponent.prototype.displayWidgetWidth = function () {
        return this.widget.width;
    };
    WidgetTextComponent.prototype.displayWidgetUrl = function () {
        return this.widget.url;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetTextComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetTextComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetTextComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetTextComponent.prototype, "widgetId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_Widget__WEBPACK_IMPORTED_MODULE_2__["Widget"])
    ], WidgetTextComponent.prototype, "widget", void 0);
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC1lZGl0L3dpZGdldC15b3V0dWJlL3dpZGdldC15b3V0dWJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widget Edit</span>\n\n  <a class=\"ml-auto\" (click)=\"updateWidget()\" >\n    <span>\n      <i class=\"fas fa-check dark\"></i>\n    </span>\n  </a>\n</nav>\n\n<!--main body-->\n<div class=\"container-fluid pt-2\">\n\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"videoname\" class=\"font-weight-bold\">Name</label>\n      <input id=\"videoname\"\n             name=\"newName\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Header Name\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"videotext\" class=\"font-weight-bold\">Text</label>\n      <input id=\"videotext\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Youtube Text\"\n             name=\"newText\"\n             [ngModel]=\"displayWidgetText()\"\n             ngModel\n             #newText=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"videourl\" class=\"font-weight-bold\">URL</label>\n      <input id=\"videourl\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Youtube URL\"\n             name=\"newUrl\"\n             [ngModel]=\"displayWidgetUrl()\"\n             ngModel\n             #newUrl=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <label for=\"videowidth\" class=\"font-weight-bold\">Width</label>\n      <input id=\"videowidth\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Video Width\"\n             name=\"newWidth\"\n             [ngModel]=\"displayWidgetWidth()\"\n             ngModel\n             #newWidth=\"ngModel\">\n    </div> <!-- form-group// -->\n\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\" role=\"button\">Delete</a>\n    </div>\n  </form>\n\n</div>\n\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Widget */ "./src/app/model/Widget.ts");
/* harmony import */ var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    WidgetYoutubeComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        var text = this.widgetForm.value.newText;
        var url = this.widgetForm.value.newUrl;
        var width = this.widgetForm.value.newWidth;
        this.widget.text = text;
        this.widget.url = url;
        this.widget.width = width;
        this.widgetService.updateWidget(this.pageId, this.widget._id, this.widget).subscribe(function () { return _this.goBack(); });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.pageId, this.widget._id).subscribe(function () { return _this.goBack(); });
    };
    WidgetYoutubeComponent.prototype.displayWidgetText = function () {
        return this.widget.text;
    };
    WidgetYoutubeComponent.prototype.displayWidgetWidth = function () {
        return this.widget.width;
    };
    WidgetYoutubeComponent.prototype.displayWidgetUrl = function () {
        return this.widget.url;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WidgetYoutubeComponent.prototype, "widgetForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "websiteId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetYoutubeComponent.prototype, "widgetId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_Widget__WEBPACK_IMPORTED_MODULE_3__["Widget"])
    ], WidgetYoutubeComponent.prototype, "widget", void 0);
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aWRnZXQvd2lkZ2V0LWxpc3Qvd2lkZ2V0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBRSxTQUFTO0VBQ2pDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnlvdXR1YmUtd2lkZ2V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyAvKiAxNjo5ICovXG4gIGhlaWdodDogMDtcbn1cblxuLnlvdXR1YmUtd2lkZ2V0IGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light pb-2\">\n\n  <a (click)=\"goBack()\">\n    <span>\n      <i class=\"fas fa-chevron-left dark\"></i>\n    </span>\n  </a>\n\n  <span class=\"navbar-brand font-weight-bold mr-auto ml-3 dark\">Widgets</span>\n\n  <!--to widget choose-->\n  <a class=\"ml-auto\" (click)=\"goToWidgetChoose()\" >\n    <span>\n      <i class=\"fas fa-plus dark\"></i>\n    </span>\n  </a>\n</nav>\n\n\n<!--list and switch-->\n<div appSortable (newIndexes) = \"onNewIndexes($event)\">\n<div class=\"container-fluid pt-0\"\n     *ngFor=\"let widget of widgets\">\n  <table class=\"table table-borderless\">\n    <tbody>\n    <tr>\n      <td>\n        <div [ngSwitch]=\"widget.type\">\n\n          <div *ngSwitchCase=\"'HEADING'\">\n            <!--display the header-->\n            <p [ngStyle]=\"{'font-size': widget.size+'00%'}\">{{widget.text}}</p>\n          </div>\n\n          <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n            <iframe width=\"640\" height=\"360\" [src]=\"convertToSafeYoutubeUrl(widget.url)\" frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n\n          <div *ngSwitchCase=\"'IMAGE'\">\n            <!--display the image-->\n            <img [src]=\"convertToSafeUrl(widget.url)\"/>\n          </div>\n\n          <div *ngSwitchCase=\"'HTML'\">\n            <!--display the html-->\n            <p>{{widget.text}}</p>\n          </div>\n          <div *ngSwitchCase=\"'TEXT'\">\n            <div *ngIf=\"widget.formatted\">\n              <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n            </div>\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                   placeholder=\"{{widget.placeholder}}\"\n                   class=\"form-control\"/>\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                      rows=\"{{widget.rows}}\"\n                      placeholder=\"{{widget.placeholder}}\"\n                      class=\"form-control\">{{widget.text}}</textarea>\n          </div>\n        </div>\n      </td>\n      <td align=\"right\">\n        <a (click)=\"goToWidgetEdit(widget._id)\" ><i class=\"fas fa-cog\"></i></a>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n</div>\n\n<div class=\"p-3\">\n\n</div>\n<app-profilebar [curUserId]=\"userId\"></app-profilebar>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/widget/widget-list/widget-list.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, router, _sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._sanitizer = _sanitizer;
        this.startIndex = 0;
        this.endIndex = 0;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            // console.log(params);
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetsByPage(this.pageId).subscribe(function (widgets) {
            _this.widgets = widgets;
            console.log(_this.widgets);
        });
    };
    // get the array from sortable.directive.js.
    WidgetListComponent.prototype.onNewIndexes = function (newIndexes) {
        this.startIndex = newIndexes.startIndex;
        this.endIndex = newIndexes.endIndex;
        // console.log("The startindex frontend is "+this.startIndex);
        // console.log("The endIndex frontend is "+this.endIndex);
        this.widgetService.reorderWidgets(this.startIndex, this.endIndex, this.pageId, this.widgets)
            .subscribe();
    };
    WidgetListComponent.prototype.refresh = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetListComponent.prototype.goToWidgetEdit = function (widgetId) {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widgetId]);
    };
    WidgetListComponent.prototype.convertToSafeYoutubeUrl = function (url) {
        // first get the id of url
        // the url must have /embed endpoint so that youtube server will allow this connection
        var res = url.split('\/');
        // console.log(res);
        var id = res[res.length - 1];
        if (id.indexOf('watch?v=') !== -1) {
            id = id.substring(8);
        }
        url = 'https://www.youtube.com/embed/' + id;
        // console.log(url);
        return this.convertToSafeUrl(url);
    };
    WidgetListComponent.prototype.convertToSafeUrl = function (url) {
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.goBack = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetListComponent.prototype.goToWidgetChoose = function () {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_2__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/model/Page.ts":
/*!*******************************!*\
  !*** ./src/app/model/Page.ts ***!
  \*******************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(name, websiteId, description) {
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, firstName, lastName) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/model/Website.ts":
/*!**********************************!*\
  !*** ./src/app/model/Website.ts ***!
  \**********************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(name, developerId, description) {
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/model/Widget.ts":
/*!*********************************!*\
  !*** ./src/app/model/Widget.ts ***!
  \*********************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(type, pageId, size, url, width, name, text) {
        this.type = type;
        this.pageId = pageId;
        this.size = size;
        this.url = url;
        this.width = width;
        this.name = name;
        this.text = text;
        this.rows = 0;
        this.deletable = true;
        this.formatted = false;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/flickr.service.ts ***!
  \********************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.key = 'cdd9cd0a484bf17de077345955ee8ee7';
        this.secret = 'cc8b43548165c919';
        this.flickerUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.flickerUrl
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        console.log('Inside front end service, the url is ' + url);
        return this.http.get(url, { responseType: 'text' });
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/page.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/page.service.ts ***!
  \******************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.websiteApiUrl = '/api/website/';
    }
    PageService.prototype.constructFindUpdateDeleteUrl = function (websiteId, pageId) {
        return this.baseUrl + this.websiteApiUrl + websiteId + '/page/' + pageId;
    };
    PageService.prototype.createPage = function (page, websiteId) {
        console.log('front page service createPage() called');
        return this.http.post(this.baseUrl + this.websiteApiUrl + websiteId + '/page', page);
    };
    PageService.prototype.findPagesByWebsite = function (websiteId) {
        console.log('front page service findPageByWebsite() called');
        // '/api/website/:websiteId/page'
        return this.http.get(this.baseUrl + this.websiteApiUrl + websiteId + '/page');
    };
    PageService.prototype.findPageById = function (websiteId, pageId) {
        console.log('front page service findpageById() called');
        // Only need to call server's url to get the data.
        // '/api/website/:websiteId/page/:pageId'
        return this.http.get(this.constructFindUpdateDeleteUrl(websiteId, pageId));
    };
    PageService.prototype.updatePage = function (websiteId, pageId, page) {
        console.log('front page service updatePage() called');
        // '/api/website/:websiteId/page/:pageId'
        return this.http.put(this.constructFindUpdateDeleteUrl(websiteId, pageId), page);
    };
    PageService.prototype.deletePage = function (websiteId, pageId) {
        console.log('front page service deletePage() called');
        // '/api/website/:websiteId/page/:pageId'
        return this.http.delete(this.constructFindUpdateDeleteUrl(websiteId, pageId));
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/sortable.directive.ts":
/*!************************************************!*\
  !*** ./src/app/services/sortable.directive.ts ***!
  \************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 The directive must modify the order of the widgets in the original array in the server.
 **/

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log(ui.item.index);
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                console.log('startIndex in sortable is ' + refe.initialIndex);
                console.log('endIndex in sortable is ' + ui.item.index());
                var newArr = {
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                };
                console.log(newArr);
                refe.newIndexes.emit(newArr);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SortableDirective.prototype, "initialIndex", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[appSortable]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





// finally the service could get the backend data from a remote server, which is an asynchronous operation.


var UserService = /** @class */ (function () {
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.options = {
            withCredentials: false
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
        this.userApiUrl = '/api/user';
    }
    // createUser(user): Observable<User> {
    //   console.log('front user service createUser() called');
    //   return this.http.post<User>(this.baseUrl + this.userApiUrl, user);
    // }
    UserService.prototype.findUserById = function (userId) {
        console.log('front user service findUserById() called');
        // Only need to call server's url to get the data.
        return this.http.get(this.baseUrl + this.userApiUrl + '/' + userId);
    };
    UserService.prototype.findUserByUserName = function (userName) {
        console.log('front user service findUserByUserName() called');
        return this.http.get(this.baseUrl + this.userApiUrl + '?username=' + userName);
    };
    // findUserByCredentials(userName, password): Observable<User> {
    //   console.log('front user service findUserByCredentials() called');
    //   const url = this.baseUrl + this.userApiUrl + '?username=' + userName + '&password=' + password;
    //   console.log('base url is ' + this.baseUrl);
    //   console.log('url is ' + url);
    //   console.log(this.http.get<User>(url));
    //   return this.http.get<User>(url);
    //
    // }
    UserService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var user = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (res) {
            return res;
        });
    };
    UserService.prototype.login = function (username, password) {
        console.log('front user service login() called');
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options).map(function (res) {
            console.log('Inside login() response, res is ' + res);
            return res;
        });
    };
    UserService.prototype.logout = function () {
        return this.http.post(this.baseUrl + '/api/logout', '', this.options).map(function (res) {
            return res;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        return this.http.get(this.baseUrl + '/api/loggedIn', this.options)
            // return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = JSON.stringify(res);
            console.log('Inside loggedIn(), the user is ' + user);
            if (user !== '0') {
                // console.log('Inside loggedIn(), the user is ' + user);
                console.log(_this.sharedService);
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        console.log('front user service updateUser() called');
        return this.http.put(this.baseUrl + this.userApiUrl + '/' + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        console.log('front user service deleteUser() called');
        return this.http.delete(this.baseUrl + this.userApiUrl + '/' + userId);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/website.service.ts ***!
  \*********************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.userApiUrl = '/api/user/';
    }
    WebsiteService.prototype.constructFindUpdateDeleteUrl = function (userId, websiteId) {
        return this.baseUrl + this.userApiUrl + userId + '/website/' + websiteId;
    };
    WebsiteService.prototype.createWebsite = function (website, userId) {
        console.log('front website service createWebsite() called');
        // '/api/user/:userId/website'
        return this.http.post(this.baseUrl + this.userApiUrl + userId + '/website', website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        console.log('front website service findWebsiteByUser() called');
        // '/api/user/:userId/website'
        return this.http.get(this.baseUrl + this.userApiUrl + userId + '/website');
    };
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        console.log('front website service findwebsiteById() called');
        // Only need to call server's url to get the data.
        // '/api/user/:userId/website/:websiteId'
        return this.http.get(this.constructFindUpdateDeleteUrl(userId, websiteId));
    };
    WebsiteService.prototype.updateWebsite = function (userId, websiteId, website) {
        console.log('front website service updateWebsite() called');
        // '/api/user/:userId/website/:websiteId'
        return this.http.put(this.constructFindUpdateDeleteUrl(userId, websiteId), website);
    };
    WebsiteService.prototype.deleteWebsite = function (userId, websiteId) {
        console.log('front website service deleteWebsite() called');
        // '/api/user/:userId/website/:websiteId'
        return this.http.delete(this.constructFindUpdateDeleteUrl(userId, websiteId));
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/widget.service.ts ***!
  \********************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.pageApiUrl = '/api/page/';
    }
    WidgetService.prototype.constructFindUpdateDeleteUrl = function (pageId, widgetId) {
        return this.baseUrl + this.pageApiUrl + pageId + '/widget/' + widgetId;
    };
    WidgetService.prototype.createWidget = function (widget, pageId) {
        console.log('front widget service createWidget() called');
        return this.http.post(this.baseUrl + this.pageApiUrl + pageId + '/widget', widget);
    };
    WidgetService.prototype.findWidgetsByPage = function (pageId) {
        console.log('front widget service findWidgetByPage() called');
        return this.http.get(this.baseUrl + this.pageApiUrl + pageId + '/widget');
    };
    WidgetService.prototype.findWidgetById = function (pageId, widgetId) {
        console.log('front widget service findwidgetById() called');
        // Only need to call server's url to get the data.
        return this.http.get(this.constructFindUpdateDeleteUrl(pageId, widgetId));
    };
    WidgetService.prototype.updateWidget = function (pageId, widgetId, widget) {
        console.log('front widget service updateWidget() called');
        return this.http.put(this.constructFindUpdateDeleteUrl(pageId, widgetId), widget);
    };
    WidgetService.prototype.deleteWidget = function (pageId, widgetId) {
        console.log('front widget service deleteWidget() called');
        return this.http.delete(this.constructFindUpdateDeleteUrl(pageId, widgetId));
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId, widgets) {
        console.log('front widget service reorder Widget() called');
        return this.http.put(this.baseUrl + this.pageApiUrl + pageId +
            '/widget?initial=' + startIndex +
            '&final=' + endIndex, widgets);
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8070'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lion/cs5610-2019/webmaker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map