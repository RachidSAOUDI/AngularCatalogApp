import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products! : Array<any>;

  constructor() {
    this.products = [
      {id:1, name:"Computer", price:6500},
      {id:2, name:"Printer", price:1200},
      {id:3, name:"SmartPhone", price:1200},
    ];
  }

  public getAllProducts() : Observable<Array<any>>{
    return of(this.products);
  }
}
