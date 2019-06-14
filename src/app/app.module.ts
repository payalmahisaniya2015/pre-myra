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
import { HomePage } from './home/home.page';
import { ListPageModule } from './list/list.module';
import { HomePageModule } from './home/home.module';
import { ViewProductComponent } from './products/view-product/view-product.component';
import {ImageViewerComponent} from './image-viewer/image-viewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, from } from 'rxjs';

// import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddEditProductComponent,
    ViewProductComponent,
    ImageViewerComponent
  ],
  entryComponents: [ImageViewerComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HomePageModule,
    ListPageModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
