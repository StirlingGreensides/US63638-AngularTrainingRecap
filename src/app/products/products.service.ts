import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/from';

import { IProduct } from './product';

@Injectable()
export class ProductsService {
  private obj: IProduct[];
  //private productsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private productsUrl = 'assets/json/Products.json';

  constructor(private http: HttpClient) { }

  getJSON(): Observable<IProduct[]> {
    return this.http.get(this.productsUrl)
                    .map((response: IProduct[]) =>  response)
                    .catch((error: any) => {
                      console.log(error)
                      return Observable.throw(new Error(error.status))
                    });
  }

  loadProducts(): Observable<IProduct[]>{
    return this.getJSON();
  }

  deleteProduct(productId: number): Observable<IProduct>{
    var d = this.getJSON().map(data => d = data.filter(product => product.id === productId));
    return d;
  }

  addProduct(): Observable<IProduct>{
    // let product: Observable<IProduct>;
    // product = Observable.create(function(observer) {
    //   let p = {
    //     id: 5,
    //     name: "TestNewProduct",
    //     description: "Add New Product",
    //     value: "Hope this works",
    //     price: 99.99
    //   }

    //   return () => p;
    // });

    //return product.map(d => console.log(d));

    let p = [{
          id: 5,
          name: "TestNewProduct",
          description: "Add New Product",
          value: "Hope this works",
          price: 99.99
        }];

    let source = Observable.from(p);
    return source;
  }
}
