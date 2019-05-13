import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../_models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getItems(): Observable<Item[]> {
  return this.http.get<Item[]>(this.baseUrl + 'item');
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
