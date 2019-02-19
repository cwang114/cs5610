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
  
  user: User;
  
  constructor(private userService: UserService, private router: ActivatedRoute, private outRouter: Router) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params: any) => {
        this.user = this.userService.findUserById(params['uid'])});
  }
  displayWebsites() {
    if (this.user) {
      let userId = this.user._id;
      this.outRouter.navigate(['/user', userId, 'website']);
    }
    
  }


}

