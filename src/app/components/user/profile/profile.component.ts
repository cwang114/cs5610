import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    // this.router.params.subscribe(params => {
    //   this.user._id = params['uid'];   
    //   console.log('user id: ' + this.user._id);  });
  }

}

