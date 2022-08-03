import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(products: Product[],searchKey:string): Product[] {
    searchKey = searchKey.toLowerCase();
    return products.filter(p=>p.title.toLowerCase().indexOf(searchKey) !==-1);
  }
}
