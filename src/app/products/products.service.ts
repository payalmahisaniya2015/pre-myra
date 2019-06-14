import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Authkey} from  '../model/AuthKey';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  secret= Authkey.getSecret();
  api = Authkey.getAPI();

  constructor(private http: HttpClient) { 
        
    //  this.secret=Authkey.getSecret();
    //  this.api=Authkey.getAPI()

  }

  url = `http://localhost:8081/pRESTige-master/api/products?secret=${this.secret}&api_key=${this.api}`;

  getData() 
  { 
    return this.http.get(this.url);
  }

  deleteData(products){
    return this.http.delete('http://localhost:8081/pRESTige-master/api/products/' + products.id +`?secret=${this.secret}&api_key=${this.api}`);

  }
}
