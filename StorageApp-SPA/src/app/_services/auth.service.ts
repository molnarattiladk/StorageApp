import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

decodedToken: any;
baseUrl = environment.apiUrl + 'auth/';
jwtHelper = new JwtHelperService();
currentUser: User;
constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.currentUser = user.user;
        }
      })
    );
  }


  loggedIn() {
   const token = localStorage.getItem('token');
   return !this.jwtHelper.isTokenExpired(token); // boolean
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
