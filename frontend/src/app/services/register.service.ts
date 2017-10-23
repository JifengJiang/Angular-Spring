import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

@Injectable()
export class RegisterService {
  constructor(private http: Http) { }
  sendUser(user: User) {
    const url = 'http://localhost:8080/user/register';
    const header = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, JSON.stringify(user), {headers: header});
  }
}
