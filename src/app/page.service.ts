import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  pages=[

    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },

    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },

    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }

  ];

  constructor() { }
  createPage(websiteId, page){

  }
  findPageByWebsiteId(websiteId){

  }
  findPageById(pageId){

  }
  updatePage(pageId, page){
    
  }
  deletePage(pageId){
    
  }
}
