import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../_models/item';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getItems(page?, itemsPerPage?): Observable<PaginatedResult<Item[]>> {
  const paginetedResult: PaginatedResult<Item[]> = new PaginatedResult<Item[]>();

  let params = new HttpParams();

  if (page != null && itemsPerPage != null) {
    params = params.append('pageNumber', page);
    params = params.append('pageSize', itemsPerPage);
  }

  return this.http.get<Item[]>(this.baseUrl + 'item', {observe: 'response', params})
  .pipe(
    map(response => {
      paginetedResult.result = response.body;
      if (response.headers.get('Pagination') != null) {
        paginetedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginetedResult;
    })
  );
}

getItem(id): Observable<Item> {
  return this.http.get<Item>(this.baseUrl + 'item/' + id);
}

// ide még egy update kell
updateItem(id: number, itemid: number, item: Item) {
  return this.http.put(this.baseUrl + 'item/' + id + '/' + itemid, item);
}

createItem(userid: number, item: Item) {
  return this.http.post(this.baseUrl + 'item/' + userid, item);
}

}
