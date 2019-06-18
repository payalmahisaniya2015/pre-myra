import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{Authkey} from  '../model/AuthKey';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  secret= Authkey.getSecret();
  api = Authkey.getAPI();
  constructor(private http: HttpClient) { }

  // urls = 'http://localhost:81/pRESTige-master/api/products/';
  url = `http://localhost:8081/pRESTige-master/api/products/?secret=${this.secret}&api_key=${this.api}`

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    
  };

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Authorization': `token ${this.secret}`})
  // };

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: string) {
    return this.http.get('http://localhost:8081/pRESTige-master/api/products/' + id +`?secret=${this.secret}&api_key=${this.api}`);
  }

  createProduct( product: Products) {
    
    const formdata: FormData = new FormData();
    formdata.append('image', product.image);
    product.secret = "206b2dbe-ecc9-490b-b81b-83767288bc5e";
    console.table(product);
    return this.http.post<Products>( `http://localhost:8081/pRESTige-master/api/products?&api_key=${this.api}`, product, this.httpOptions);
  }

  updateProduct( product: Products, id) {
    return this.http.put<Products>('http://localhost:8081/pRESTige-master/api/products/' + id +`?secret=${this.secret}&api_key=${this.api}`, product, this.httpOptions);
  }

  // deleteData(products){
  //   return this.http.delete(this.url + 'products/' + products.id );
  // }

  deleteData(products){
    return this.http.delete('http://localhost:8081/pRESTige-master/api/products/' + products.id +`?secret=${this.secret}&api_key=${this.api}`);
  }

}
