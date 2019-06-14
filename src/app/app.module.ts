import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Params, Router, ActivatedRoute} from '@angular/router';
// import { ReactiveFormsModule } from "@angular/forms";


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AddEditProductComponent } from './products/add-edit-product/add-edit-product.component';
import { HomePage } from './home/home.page';
import { ListPageModule } from './list/list.module';
import { HomePageModule } from './home/home.module';
import { ViewProductComponent } from './products/view-product/view-product.component';
import {ImageViewerComponent} from './component/image-viewer/image-viewer.component';
import { HttpClientModule } from '@angular/common/http';
// import { HomeComponent } from './home/home.component';

import { Observable, from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    AddEditProductComponent,
    ViewProductComponent,
    ImageViewerComponent
  ],
  entryComponents: [ImageViewerComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    HomePageModule,
    ListPageModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
