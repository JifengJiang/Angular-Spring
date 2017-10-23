import {User} from '../models/user';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UserService {
  constructor(private http: Http) { }
  getUserByName(username: string) {
    const url = 'http://localhost:8080/rest/user/username';
    const header = new Headers({'Content-type': 'application/json', 'Authorization': 'Bearer' + localStorage.getItem('token')});
    return this.http.post(url, username, {headers: header});
  }
}
