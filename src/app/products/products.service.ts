import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()
export class ProductsService {
  private obj: IProduct[];

  constructor(private http: HttpClient) { }

  getJSON(): Observable<IProduct[]> {
    return this.http.get("assets/json/Products.json")
      .map((response: IProduct[]) =>  response)
      .catch((error: any) => {
        console.log(error)
        return Observable.throw(new Error(error.status))
      });
  }
}
