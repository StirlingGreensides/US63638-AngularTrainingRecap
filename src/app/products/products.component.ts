import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProductsService } from './products.service';
import { IProduct } from './product';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';

import * as productActions from "./../actions/product.actions";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(state => state.products);
   }

  ngOnInit() {   
     this.getProducts();
  }

  getProducts(){
    this.store.dispatch(new productActions.LoadProductsActions());
  }

  addProduct(){
    this.store.dispatch(new productActions.AddProductActions());
  }
}
