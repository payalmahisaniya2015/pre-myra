import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Products } from '../products';

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

  constructor(private pf: FormBuilder,
              private pservice: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.pageTitle = 'Edit Product';
      this.pservice.getProduct(this.id).subscribe(
        res => {
          this.productForm.patchValue({

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

  createForm() {
    this.productForm = this.pf.group({
      name: '',
      code: '',
      quantity: '',
      price: '',
      description: ''
    });
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
      this.router.navigateByUrl('/viewproduct');
    } else {
    this.addeditproduct = this.productForm.value;
    console.log(this.addeditproduct);
    this.productForm.reset();

    this.pservice.createProduct(this.addeditproduct).subscribe(
      data => this.posts.push(data)
    );
    this.router.navigateByUrl('/product');
  }
  }
}
