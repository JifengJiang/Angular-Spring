import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private model = {'username': '', 'password': ''};
  private currentUserName;
  constructor(private loginService: LoginService) { }

  onSubmit() {
    this.loginService.sendCredentials(this.model).subscribe(
      data => {
        localStorage.setItem('token', JSON.parse(JSON.stringify(data))._body);
        this.loginService.sendToken(localStorage.getItem('token')).subscribe(
          data => {
            this.currentUserName = this.model.username;
            localStorage.setItem('currentUserName', this.model.username);
            this.model.username = '';
            this.model.password = '';
          }
        );
      });
  }
}
