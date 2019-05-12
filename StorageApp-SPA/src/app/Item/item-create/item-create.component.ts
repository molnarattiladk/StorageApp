import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Item } from 'src/app/_models/item';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/_services/item.service';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  @Output() cancelCreate = new EventEmitter();

  model: any = {};
  item: Item;
  createForm: FormGroup;
  @Input() user: User;
  constructor(private authService: AuthService, private itemService: ItemService,
              private fb: FormBuilder, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.createAddForm();
    this.router.data.subscribe(data => {
      this.user = data.user; // ['user']
    });
  }

  createAddForm() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required], // dropdownlist-bol
      count: [null, Validators.required],
      grossPrice: [null, Validators.required],
      netPrice: [null, Validators.required],
    });
  }

  create() {
    if (this.createForm.valid) {
      console.log('valid');
      this.item = Object.assign({}, this.createForm.value);
      console.log('object');
      console.log(this.item);
      this.itemService.createItem(this.authService.decodedToken.nameid, this.item).subscribe(() => {
        console.log('Sikeres Felvétel');
      }, error => {
        console.log(error);
      });
    }
  }

  cancel() {
    this.cancelCreate.emit(false);
}

}
