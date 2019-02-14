import { Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm

  username: String;
  password: String;

  constructor(private router: Router) { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    // alert(this.username);
    // alert(this.password);
  }
  ngOnInit() {
  }

}
