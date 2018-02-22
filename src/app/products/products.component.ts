import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProductsService } from './products.service';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})

export class ProductsComponent implements OnInit {
  products: IProduct[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    
     this.productService.getJSON()
                        .subscribe(data => {
                                    this.products = data
                                  }, error => {
                                    console.log(error)
                                  });
  }

}
