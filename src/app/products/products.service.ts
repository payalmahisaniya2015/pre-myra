import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:81/pRESTige-master/api/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };


  getProducts() {
    return this.http.get(this.url + 'products/');
  }

  getProduct(id: string) {
    return this.http.get(this.url + 'products/' + id);
  }

  createProduct( product: Products) {
    return this.http.post<Products>(this.url + 'products', product, this.httpOptions);
  }

  updateProduct( product: Products, id) {
    return this.http.put<Products>(this.url + 'products/' + id, product, this.httpOptions);
  }

  deleteData(products){
    return this.http.delete(this.url + 'products/' + products.id );
  }

  // deleteData(products){
  //   return this.http.delete('http://localhost:8081/pRESTige-master/api/products/' + products.id +`?secret=${this.secret}&api_key=${this.api}`);
  // }

}
