import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';



//provide etmedik
@Injectable()
export class CategoryService {
  url= "http://localhost:3000/categories"

  constructor(private http: HttpClient) { }//app module de modülü eklemeyi unutma
  
  getCategories(): Observable<Category[]>{ // gözlemlenebilir veri (observable)
    return this.http.get<Category[]>(this.url)//bu url'den get yap
  }
  
}
