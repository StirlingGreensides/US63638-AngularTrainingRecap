import { Injectable } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Action } from '../actions/product.actions';
import { Effect, Actions } from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import * as productActions from "./../actions/product.actions";

@Injectable()
export class ProductEffects {

    constructor (private productService: ProductsService,
                 private action$: Actions) {  }

    @Effect() loadProduct$ = this.action$.ofType(productActions.LOAD_PRODUCTS)
                                         .switchMap(() => this.productService.loadProducts()
                                                .map(products => (new productActions.LoadProductsSuccessActions(products))));


    @Effect() deleteProduct$ = this.action$.ofType(productActions.DELETE_PRODUCT)
                                           .switchMap((action: productActions.DeleteProductActions) => this.productService.deleteProduct(action.payload)
                                                .map(product => (new productActions.DeleteProductSuccessActions(product.id))));

}