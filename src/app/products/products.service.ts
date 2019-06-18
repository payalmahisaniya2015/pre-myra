import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{Authkey} from  '../model/AuthKey';
=======
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {Authkey} from '../model/Authkey';
>>>>>>> a631afaefda9f3b1dc15b8428e2bfc019d5b1033

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
<<<<<<< HEAD
  secret= Authkey.getSecret();
  api = Authkey.getAPI();
=======
  secret = Authkey.getSecret();
  api = Authkey.getAPI();

>>>>>>> a631afaefda9f3b1dc15b8428e2bfc019d5b1033
  constructor(private http: HttpClient) { }

  // urls = 'http://localhost:81/pRESTige-master/api/products/';
  url = `http://localhost:8081/pRESTige-master/api/products/?secret=${this.secret}&api_key=${this.api}`

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    
  };

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getProducts() {
    return this.http.get(this.url);
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
  //   return this.http.delete(this.url + 'products/' + products.id );
  // }

  // url = `http://localhost:8081/pRESTige-master/api/products?secret=${this.secret}&api_key=${this.api}`;
}
