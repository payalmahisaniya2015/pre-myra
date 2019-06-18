import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Params, Router, ActivatedRoute} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { ProductsComponent } from './products/products.component';
import { AddEditProductComponent } from './products/add-edit-product/add-edit-product.component';
import { SubproductsComponent } from './products/subproducts/subproducts.component';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { ViewProductComponent } from './products/view-product/view-product.component';
import {ImageViewerComponent} from './image-viewer/image-viewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, from } from 'rxjs';

// import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ImageUploaderModule } from 'ngx-image-uploader';
=======
import { AddEditSubproductComponent } from './products/subproducts/add-edit-subproduct/add-edit-subproduct.component';
import { routes } from './app-routing/routes';
>>>>>>> a631afaefda9f3b1dc15b8428e2bfc019d5b1033

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddEditProductComponent,
    ViewProductComponent,
    ImageViewerComponent,
    SubproductsComponent,
    AddEditSubproductComponent,
  ],
  entryComponents: [ImageViewerComponent],
  imports: [
    // RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HomePageModule,
    HttpClientModule,
    ReactiveFormsModule,
    ImageUploaderModule
  ],
  exports: [RouterModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
