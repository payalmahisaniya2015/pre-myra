import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Products } from './products';
import { Observable, Observer } from 'rxjs';
// import { url } from 'inspector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Products[];

  // name = 'Angular 7';
  // base64Image: any;

  constructor(private pservice: ProductsService) {}

  ngOnInit() {
    this.pservice.getData().subscribe((data: Products[]) => {
      this.products = data;
    });
  }
//     const imageUrl = 'http://localhost:81/pRESTige-master/api/products/';

//     this.getBase64ImageFromURL(imageUrl).subscribe((base64data: string) => {
//    console.log(base64data);
//    // this is the image as dataUrl
//    this.base64Image = 'data:image/jpg;base64,' + base64data;
//  });
//   }

// tslint:disable-next-line: no-shadowed-variable
// getBase64ImageFromURL(url: string) {
//     return Observable.create((observer: Observer<string>) => {
//       // create an image object
//       const img = new Image();
//       img.crossOrigin = 'Anonymous';
//       img.src = url;
//       if (!img.complete) {
//           // This will call another method that will create image from url
//           img.onload = () => {
//           observer.next(this.getBase64Image(img));
//           observer.complete();
//         };
//           img.onerror = (err) => {
//            observer.error(err);
//         };
//       } else {
//           observer.next(this.getBase64Image(img));
//           observer.complete();
//       }
//     });
//  }

// getBase64Image(img: HTMLImageElement) {
//   // We create a HTML canvas object that will create a 2d image
//   const canvas = document.createElement('canvas');
//   canvas.width = img.width;
//   canvas.height = img.height;
//   const ctx = canvas.getContext('2d');
//   // This will draw image
//   ctx.drawImage(img, 0, 0);
//   // Convert the drawn image to Data URL
//   const dataURL = canvas.toDataURL('image/png');
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
// }

}
