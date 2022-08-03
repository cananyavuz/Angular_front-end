import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  basarili(message:string){
    alertify.success(message)
  }

  
  hatali(message:string){
    alertify.error(message)
  }
  
  

}
