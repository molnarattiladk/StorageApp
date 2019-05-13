import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Item } from '../_models/item';
import { ItemService } from '../_services/item.service';

@Injectable()
export class ItemListResolver implements Resolve<Item[]> {
    pageNumber = 1;
    pageSize = 5;

    constructor(private itemService: ItemService, private route: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Item[]> {
        return this.itemService.getItems(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.route.navigate(['/home']);
                return of(null);
            })
        );
    }
}
