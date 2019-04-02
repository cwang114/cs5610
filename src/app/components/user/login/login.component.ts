import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from 'src/app/user.service';
import {User} from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f')
  loginForm: NgForm;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

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
    console.log('data', username);
    this.userService.login(username, password).subscribe(
      (user: any) => {
        // console.log('In login() component, the front end service returns: ' + user);
        this.router.navigate(['/user', user._id]);
      }, (error: any) => {
        console.log(error);
      });
  }
}
