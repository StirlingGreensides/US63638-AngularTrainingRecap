import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../models/app-state';

import * as productActions from "./../../actions/product.actions";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
  }

  addProduct(){
    this.store.dispatch(new productActions.AddProductActions());

    this.router.navigate(["/products"]);
  }
}
