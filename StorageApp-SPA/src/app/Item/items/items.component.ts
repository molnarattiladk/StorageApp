import { Component, OnInit } from '@angular/core';
import { Item } from '../../_models/item';
import { ItemService } from '../../_services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getItems().subscribe((items: Item[]) => {
      this.items = items;
    }, error => {
      console.log(error);
    });
  }

}
