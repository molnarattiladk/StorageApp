import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  @Output() cancelAdd = new EventEmitter();

  model: any = {};
  user: User;
  addForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
  }

  createAddForm() {
    this.addForm = this.fb.group({
      username: ['', Validators.required],
      role: ['Admin'], // dropdownlist-bol
      salary: ['', Validators.required],
      started: [null, Validators.required],
      contact: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup) {
    // tslint:disable-next-line:object-literal-key-quotes
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }

  add() {
    if (this.addForm.valid) {
      this.user = Object.assign({}, this.addForm.value);
      this.userService.adduser(this.user).subscribe(() => {
        console.log('Sikeres user felvétel');
      }, error => {
        console.log(error);
      });
    }
  }
}
