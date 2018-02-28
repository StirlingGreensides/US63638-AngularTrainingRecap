import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';

import * as productActions from "./../actions/product.actions";

@Component({
  selector: "[app-product]",
  //selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() id: number
  @Input() name: string;
  @Input() description: string;
  @Input() value: string;
  @Input() price: number;

  constructor(private store: Store<AppState>) { }

  deleteProduct(productId: number){

    this.store.dispatch(new productActions.DeleteProductActions(this.id));
  }
}
