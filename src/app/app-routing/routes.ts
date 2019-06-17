import { Routes, Route } from '@angular/router';

import { ProductsComponent } from '../products/products.component';
import { HomePage } from '../home/home.page';
import { AddEditProductComponent } from '../products/add-edit-product/add-edit-product.component';
import { ViewProductComponent } from '../products/view-product/view-product.component';
import { AddEditSubproductComponent } from '../products/subproducts/add-edit-subproduct/add-edit-subproduct.component';
// import { HomePageModule } from './home/home.module';

export const routes: Routes = [
    {path: 'product', component: ProductsComponent},
    {path: 'home', component: HomePage},
    {path: 'addeditproduct', component: AddEditProductComponent},
    {path: 'addeditproduct/:id', component: AddEditProductComponent},
    {path: 'viewproduct', component: ViewProductComponent},
    {path: 'viewproduct/:id', component: ViewProductComponent},
    {path: 'addeditsubproduct', component: AddEditSubproductComponent}
];
