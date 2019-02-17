import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from 'src/app/user.service';
import {User} from 'src/app/model/User';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //properties
  userId: String;
  user = {};
  username: String;
  constructor(private userService: UserService, private router: ActivatedRoute, private outRouter: Router) { }

  ngOnInit() {
    console.log(this.router.params['value']);
    //this.userId = this.router.params['value'].uid;
    this.router.params.subscribe(
      (params: any) => { 
        // console.log(params);
        this.userId = params['uid']});
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
    // console.log(this.user);
  }
  displayWebsites() {
    let user = this.userService.findUserByUserName(this.username);
    if (user) {
      this.outRouter.navigate(['/user', user._id, 'website']);
    }
    
  }


}

