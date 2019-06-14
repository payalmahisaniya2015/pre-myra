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

   url = 'http://localhost:8081/pRESTige-master/api/';

   getData(id: string) {
    // let check = this.url + 'products/' + id + '?secret=206b2dbe-ecc9-490b-b81b-83767288bc5e&api_key=d1b8fb55-7a81-455d-b060-44cc86064aef';
    // console.log(check);
    return this.http.get(this.url + 'products/' + id + '?secret=206b2dbe-ecc9-490b-b81b-83767288bc5e&api_key=d1b8fb55-7a81-455d-b060-44cc86064aef');
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
