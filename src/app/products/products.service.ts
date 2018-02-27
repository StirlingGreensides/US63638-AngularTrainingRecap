import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
    var d = this.getJSON().subscribe(data => data.filter(product => product.id === productId),
                                     error => console.log(error));

    return d[0];
  }
}
