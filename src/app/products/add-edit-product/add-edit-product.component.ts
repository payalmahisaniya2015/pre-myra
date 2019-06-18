import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { ImageUploaderOptions, FileQueueObject } from 'ngx-image-uploader';

import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {

  pageTitle: string;
  error: string;
  uploadError: string;

  productForm: FormGroup;
  addeditproduct: Products;

  posts: Products[] = [];
  id;
  public files: any[];
  
  constructor(private pf: FormBuilder,
              private pservice: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.createForm(); 
  }


  processFile(event){
      let file = event.target.files[0];
      let fileName = file.value;
      console.log(fileName);
  }
    
 

  createForm() {
    this.productForm = this.pf.group({
      image: [''],
      name: [''],
      code: [''],
      quantity: [''],
      price: [''],
      description: ['']
    });
  }

 imagefile: string;
//  onFileSelected(event){
//    this.imagefile = URL.createObjectURL(event.target.files[0])
//    console.log(this.imagefile);

//  }
// onUpload(e):void{
//   this.imagefile = e.target.value;
//   console.log(this.imagefile);
// }


 
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.pageTitle = 'Edit Product';
      this.pservice.getProduct(this.id).subscribe(
        res => {
          this.productForm.patchValue({
            image: this.imagefile,
            name: res.name,
            code: res.code,
            quantity: res.quantity,
            price: res.price,
            description: res.description
          });
        }
      );
    } else {
      this.pageTitle = 'Add Product';
    }
  }



  updateProduct() {
      this.addeditproduct = this.productForm.value;
      console.log(this.addeditproduct);
      this.productForm.reset();
      this.pservice.updateProduct(this.addeditproduct, this.id)
      .subscribe(
        (data) => {this.posts.push(data); }
        // success => alert("Done"),
        // error => alert("error")
      );
  }

  onSubmit() {
    if (this.id) {
      this.updateProduct();
      // this.router.navigateByUrl('/viewproduct');
    } else {
    this.addeditproduct = this.productForm.value;
    //  this.addeditproduct.image = this.imagefile; 
    console.log(this.addeditproduct);
    this.productForm.reset();

    this.pservice.createProduct(this.addeditproduct).subscribe(
      data => this.posts.push(data)
    );
    this.router.navigateByUrl('/product');
  }
  }
}
