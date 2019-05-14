import { Component, OnInit } from '@angular/core';
import { Item } from '../../_models/item';
import { ItemService } from '../../_services/item.service';
import { ActivatedRoute } from '@angular/router';
import { PaginatedResult, Pagination } from '../../_models/pagination';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  pagination: Pagination;
  itemParams: any = {};

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.itemParams.orderBy = 'name';
    this.loadItems();
      // this.route.data.subscribe(data => {
      //   // tslint:disable-next-line:no-string-literal
      // this.items = data.items;
      //   // tslint:disable-next-line:no-string-literal
      // this.pagination = data.items.pagination;
      // });
      // console.log(this.items);
      // console.log(this.pagination);
  }

   loadItems() {
     this.itemService.getItems(1, 5, this.itemParams)
     .subscribe((res: PaginatedResult<Item[]>) => {
       this.items = res.result;
       this.pagination = res.pagination;
     }, error => {
       console.log(error);
       console.log(this.items);
       console.log(this.pagination);
     });
   }

   loadPage() {
    this.itemService.getItems(this.pagination.currentPage, this.pagination.itemsPerPage, this.itemParams)
    .subscribe((res: PaginatedResult<Item[]>) => {
      this.items = res.result;
      this.pagination = res.pagination;
    }, error => {
      console.log(error);
      console.log(this.items);
      console.log(this.pagination);
    });
   }

   pageChanged(event: any): void {
     this.pagination.currentPage = event.page;
     this.loadPage();
   }

}
