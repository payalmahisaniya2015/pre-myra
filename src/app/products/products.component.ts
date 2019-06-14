import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Products } from './products';
import { Observable, Observer } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from '../component/image-viewer/image-viewer.component';
import { ToastController } from '@ionic/angular';
// import { map } from 'rxjs/operators';
// import { url } from 'inspector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  height: number = 10;
  width: number = 10;
  products: Products[];
  styleimage(){
    return {width: this.width, height: this.height}
  }
  // name = 'Angular 7';
  // base64Image: any;

  constructor(private pservice: ProductsService, public alertController: AlertController, public modalController: ModalController,public toastController: ToastController) {}

  ngOnInit() {
    this.pservice.getData().subscribe((data: Products[]) => {
      this.products = data;
      console.log(data);
    });
  }


  async deletealert(product: Products) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteproduct(product);
          }
        }
      ]
    });

    await alert.present();
  }
  async viewImage(src: string) {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: {
        imgSource: src,

      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'successfully deleted',
      duration: 3000
    });
    toast.present();
  }

  deleteproduct(product: Products){
    
    this.pservice.deleteData(product).subscribe((data: Products) => {
     // this.products = data;
      console.log(data);
      this.presentToast();
    
        this.pservice.getData().subscribe((data: Products[]) => {
        this.products = data;
        console.log(data);
      });
  
    });
  
    console.log(product);
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
