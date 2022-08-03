import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
 
  //transform(value: unknown, ...args: unknown[]): unknown {
  //... dizileri birleştirmek için, kopyalama işlemi için de kullanılır.
  //belirsiz sayıda tanımlama yapmak için kullanılır.
  
  transform(value: string, limit?: number): string {
    if(!limit) limit = 20;
    if(value.length>limit){
      return  value.substring(0,limit)+"...";
    }
    return value;
  }
}
