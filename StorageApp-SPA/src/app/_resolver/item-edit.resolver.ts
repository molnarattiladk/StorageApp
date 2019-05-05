import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Item } from '../_models/item';
import { ItemService } from '../_services/item.service';

@Injectable()
export class ItemEditResolver implements Resolve<Item[]> {

    constructor(private itemService: ItemService, private route: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Item[]> {
        // tslint:disable-next-line:no-string-literal
        return this.itemService.getItem(route.params['id']).pipe(
            catchError(error => {
                this.route.navigate(['/home']);
                return of(null);
            })
        );
    }
}
