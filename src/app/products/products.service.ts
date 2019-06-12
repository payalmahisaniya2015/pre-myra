import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:81/pRESTige-master/api/';

  getData() {
    return this.http.get(this.url + 'products');
  }
}
