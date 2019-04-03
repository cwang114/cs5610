import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../model/User';
import 'rxjs/Rx';
import {SharedService} from './shared.service';
// finally the service could get the backend data from a remote server, which is an asynchronous operation.

import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private sharedService: SharedService) {
  }

  options = {
    withCredentials: false
  };
  baseUrl = environment.baseUrl;
  userApiUrl = '/api/user';

  // createUser(user): Observable<User> {
  //   console.log('front user service createUser() called');
  //   return this.http.post<User>(this.baseUrl + this.userApiUrl, user);
  // }

  findUserById(userId): Observable<User> {
    console.log('front user service findUserById() called');
    // Only need to call server's url to get the data.
    return this.http.get<User>(this.baseUrl + this.userApiUrl + '/' + userId);

  }

  findUserByUserName(userName): Observable<User> {
    console.log('front user service findUserByUserName() called');
    return this.http.get<User>(this.baseUrl + this.userApiUrl + '?username=' + userName);

  }

  // findUserByCredentials(userName, password): Observable<User> {
  //   console.log('front user service findUserByCredentials() called');
  //   const url = this.baseUrl + this.userApiUrl + '?username=' + userName + '&password=' + password;
  //   console.log('base url is ' + this.baseUrl);
  //   console.log('url is ' + url);
  //   console.log(this.http.get<User>(url));
  //   return this.http.get<User>(url);
  //
  // }
  register(username: String, password: String) {
    this.options.withCredentials = true;
    const user = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/register', user, this.options)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

  login(username: String, password: String) {
    console.log('front user service login() called');
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/login', body, this.options).map(
      (res: Response) => {
        console.log('Inside login() response, res is ' + res);
        return res;
      });
  }

  logout() {
    return this.http.post(this.baseUrl + '/api/logout', '', this.options).map(
      (res: Response) => {
        return res;
      });
  }

  loggedIn() {
    return this.http.get(this.baseUrl + '/api/loggedIn', this.options)
    // return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map((res: Response) => {
        const user = JSON.stringify(res);
        console.log('Inside loggedIn(), the user is ' + user);
        if (user !== '0') {
          // console.log('Inside loggedIn(), the user is ' + user);
          console.log(this.sharedService);
          this.sharedService.user = user; // setting user so as to share with all components
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  updateUser(userId, user): Observable<User> {
    console.log('front user service updateUser() called');
    return this.http.put<User>(this.baseUrl + this.userApiUrl + '/' + userId, user);

  }

  deleteUser(userId) {
    console.log('front user service deleteUser() called');
    return this.http.delete<User>(this.baseUrl + this.userApiUrl + '/' + userId);
  }


}
