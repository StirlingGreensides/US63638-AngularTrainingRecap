import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable()
export class ProductsService {
  private obj: IProduct[];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      //alert(JSON.stringify(data) )
      this.obj = data
    }, error => {
      console.log(error)
    });
  }

  getJSON(): Observable<IProduct[]> {
    return this.http.get("assets/json/Products.json")
      .map((data: IProduct[]) => data)
      .catch((error: any) => {
        console.log(error)
        return Observable.throw(new Error(error.status))
      });
  }

  loadProducts(): IProduct[] {
    return this.obj;
    //return this.ProductsList;
  }

  private readonly ProductsList = [
    {
      id: 1,
      name: 'Fuck Your Couch',
      description: 'What did the five fingers say to the face?',
      value: 'SLAP',
      price: 4.99
    },
    {
      id: 2,
      name: '“Knock, knock.” “Who’s there?”',
      description: 'very long pause….',
      value: '“Java.”',
      price: 5.99
    },
    {
      id: 3,
      name: 'A SQL query goes into a bar.',
      description: 'walks up to two tables and asks',
      value: '"Can I join you?"',
      price: 1.99
    },
    {
      id: 4,
      name: 'Whats the object-oriented way to become wealthy?',
      description: 'wait for it....',
      value: 'Inheritance',
      price: 2.99
    }
  ];
}
