import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  token: string;
  constructor(private http: Http) { }
  sendCredentials(model) {
    const tokenUrl = 'http://localhost:8080/user/login';
    const headers1 = new Headers({'Content-type': 'application/json'});
    return this.http.post(tokenUrl, JSON.stringify(model), {headers: headers1});
  }
  sendToken(token) {
    const userUrl = 'http://localhost:8080/rest/user/users';
    const headers2 = new Headers({'Authorization': 'Bearer ' + token});
    return this.http.get(userUrl, {headers: headers2});
  }
  checkLogin() {
    if (localStorage.getItem('currentUserName') !== '' && localStorage.getItem('token') !== '') {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('currentUserName', '');
    alert('You just logged out.');
  }
}
