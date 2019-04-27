import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/_models/item';
import { ItemService } from 'src/app/_services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detailed',
  templateUrl: './item-detailed.component.html',
  styleUrls: ['./item-detailed.component.css']
})
export class ItemDetailedComponent implements OnInit {

  @Input() item: Item;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadItem();
  }

  loadItem() {
    // tslint:disable-next-line:no-string-literal
    this.itemService.getItem(+this.route.snapshot.params['id']).subscribe((item: Item) => {
      this.item = item;
    }, error => {
      console.log(error);
    });
  }

}
