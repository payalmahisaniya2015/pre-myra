import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute} from '@angular/router';
import { ViewProductService } from './view-product.service';
import { ViewProduct } from './view-product';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {

  viewproduct: ViewProduct[];
  id;
  constructor(private pservice: ViewProductService, private router: Router, private route: ActivatedRoute) {}
  // constructor() { }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
     if (this.id) {
      this.pservice.getData(this.id).subscribe((data: ViewProduct[]) => {
        this.viewproduct = data;
      
      });
    }
    // console.log(this.viewproduct);
    // } else {
    //   console.log('No details found');
    // }
    }
}
