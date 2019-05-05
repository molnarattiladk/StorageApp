import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detailed',
  templateUrl: './employee-detailed.component.html',
  styleUrls: ['./employee-detailed.component.css']
})
export class EmployeeDetailedComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user; // ['user']
    });
  }

  // loadUser() {
  //   // tslint:disable-next-line:no-string-literal
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
  //     this.user = user;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
