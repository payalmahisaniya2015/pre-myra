import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ViewProduct } from './view-product';


@Injectable({
  providedIn: 'root'
})
export class ViewProductService {

  constructor(private http: HttpClient) { }

   url = 'http://localhost:81/pRESTige-master/api/';

   getData(id: string) {
    // let check = this.url + 'products/' + id;
    // console.log(check);
    return this.http.get(this.url + 'products/' + id);
  }
   
  //  getData() {
  //   return this.http.get(this.url + 'products');
  // }
  // getData(id: number) {
  //   const url = 'http://localhost:81/pRESTige-master/api/products/' + id;
  //   return this
  //           .http
  //           .get(url)
  //           .map(res => {
  //             return res;
  //           });
  // }
  // getData(id: number): Observable<ViewProduct> {
  //   const url = `${this.urlbyid}/${id}`;
  //   return this.http.get<ViewProduct>(url).pipe(
  //     tap(_ => this.log(`fetched product id=${id}`)),
  //     catchError(this.handleError<ViewProduct>(`getData id=${id}`))
  //   );
  // }
}
