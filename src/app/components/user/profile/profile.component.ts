import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from 'src/app/user.service';
import {User} from 'src/app/model/User';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  constructor(private userService: UserService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => this.user = this.userService.findUserById(params.uid));
  }

}

