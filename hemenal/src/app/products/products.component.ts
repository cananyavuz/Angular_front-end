import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/products.repository';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';

//declare let alertify:any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(
  //servisler burda yazılır
  private alertifyService:AlertifyService,
  private productService: ProductService
  ) { }

  productRepository = new ProductRepository();
  //products = this.productRepository.getProducts();
  

  //popularProduct = this.productRepository.getPopularProducts();
  
  searchKey: string = "";

  products:Product[] = [];
  popularProduct:Product[] = [];
  filteredProduct = this.products;

//   products:Product[] = [
//     {id:1, categoryId:1, title:"Converse Chuck Allstar", imageUrl:"01.jpg", brand: "Converse", price: 1950, isPopular: false},
//     {id:2, categoryId:1, title:"Converse Chuck Allstar Beyaz", imageUrl:"02.jpg", brand: "Converse", price: 1850, isPopular: false},
//     {id:3, categoryId:1, title:"Timberland Bot", imageUrl:"03.jpg", brand: "Timberland", price: 2450, isPopular: false},
//     {id:4, categoryId:1, title:"Super Star", imageUrl:"04.jpg", brand: "Adidas", price: 1750, isPopular: false},
//     {id:5, categoryId:1, title:"Nike Air Lethear", imageUrl:"05.jpg", brand: "Nike", price: 2050, isPopular: true}
// ];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data=>this.products=data
    )
    this.productService.getPopularProducts().subscribe(
      data=>this.popularProduct=data
    )
    
  }
  
  addToChart(event:any, item:Product){
    if(event.target.classList.contains('btn-success')){
        event.target.classList.remove('btn-success');
        event.target.classList.add('btn-danger');
        event.target.innerText = 'SEPETE EKLENDİ';
        //alertify.success('SEPETE EKLENDİ');
        this.alertifyService.basarili('SEPETE EKLENDİ');
    }else{
      event.target.classList.add('btn-success');
      event.target.classList.remove('btn-danger');
      event.target.innerText = 'SEPETE EKLE';  
      //alertify.error('SEPETTEN ÇIKARILDI');
      this.alertifyService.hatali('SEPETTEN ÇIKARILDI');
    }
  }

  
}
