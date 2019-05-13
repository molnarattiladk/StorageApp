import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/_models/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/_services/item.service';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  item: Item;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private itemServcie: ItemService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.item = data.item;
    });
  }

  updateItem() {
    this.itemServcie.updateItem(this.authService.decodedToken.nameid, this.item.id, this.item).subscribe(next => {
      console.log(this.item);
      this.editForm.reset(this.item);
    }, error => {
      console.log(error);
    });
  }

}
