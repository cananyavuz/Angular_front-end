import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

//provide etmedik
@Injectable()
export class ProductService {
  url= "http://localhost:3000/products"
  url2 = "http://localhost:3000/products?isPopular=true";
  constructor(private http: HttpClient) { }//app module de modülü eklemeyi unutma
  
  getProducts(): Observable<Product[]>{ // gözlemlenebilir veri (observable)
    return this.http.get<Product[]>(this.url)//bu url'den get yap
  }
  getPopularProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url2)
  }
}
