import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {Authkey} from '../model/Authkey';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  secret = Authkey.getSecret();
  api = Authkey.getAPI();

  constructor(private http: HttpClient) { }

  url = 'http://localhost:81/pRESTige-master/api/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getProducts() {
    return this.http.get(this.url + 'products/');
  }

  getProduct(id: string) {
    return this.http.get(this.url + 'products/' + id)
  }

  createProduct(product: Products) {
    // const formdata: FormData = new FormData();
    // formdata.append('image', product.image);
    // debugger;
    return this.http.post<Products>(this.url + 'products', product, this.httpOptions)
    .pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  updateProduct( product: Products, id) {
    return this.http.put<Products>(this.url + 'products/' + id, product, this.httpOptions)
    .pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  deleteData(products){
    return this.http.delete(this.url + 'products/' + products.id );
  }

  // deleteData(products){
  //   return this.http.delete('http://localhost:8081/pRESTige-master/api/products/' + products.id +`?secret=${this.secret}&api_key=${this.api}`);
  // }

  // url = `http://localhost:8081/pRESTige-master/api/products?secret=${this.secret}&api_key=${this.api}`;
}
