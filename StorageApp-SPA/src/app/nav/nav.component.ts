import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedInMode = false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  loggedInToggle() {
    this.loggedInMode = true;
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token; // ez a van vagynincs
  }


  logout() {
     localStorage.removeItem('token');
     console.log('logged out');
     this.router.navigate(['/home']);
  }


}
