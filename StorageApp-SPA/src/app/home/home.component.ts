import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  loggedInMode = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  loggedInToggle() {
    this.loggedInMode = true;
  }
}
