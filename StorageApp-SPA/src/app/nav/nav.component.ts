import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedInMode = false;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }


  loggedInToggle() {
    this.loggedInMode = true;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }


  logout() {
     localStorage.removeItem('token');
     console.log('logged out');
     this.router.navigate(['/home']);
  }


}
