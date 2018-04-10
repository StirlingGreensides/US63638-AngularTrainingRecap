import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/from';

import { IProduct } from './product';

@Injectable()
export class ProductsService {
  private obj: IProduct[];
  //private productsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private productsUrl = 'assets/json/Products.json';

  constructor(private http: HttpClient,
              private store: Store<AppState>) { }

  getJSON(): Observable<IProduct[]> {
    return this.http.get(this.productsUrl)
                    .map((response: IProduct[]) =>  response)
                    .catch((error: any) => {
                      console.log(error)
                      return Observable.throw(new Error(error.status))
                    });
  }

  loadProducts(): Observable<IProduct[]> {
    return this.getJSON();
  }

  deleteProduct(productId: number): Observable<IProduct> {
    var d = this.getJSON().map(data => d = data.filter(product => product.id === productId));
    return d;
  }

  addProduct(): Observable<IProduct>{
    let id: number; 
    this.store.select(data => data.products).subscribe(p => id = p.length + 1)

    let p = [{
          id: id,
          name: "TestNewProduct",
          description: "Add New Product",
          value: "Hope this works",
          price: 99.99
        }];

    let source = Observable.from(p);
    return source;
  }
}
