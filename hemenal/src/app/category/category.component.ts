import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) { }

  categoryRepository = new CategoryRepository();
  
  //burda kullanmak için provide etmemiz lazım (component kısmında)
  categoriesurl:Category[] = []; //urlden gelen bilgileri atmak için boş liste oluşturuyoruz


  categories = this.categoryRepository.getCategories();
  // categories:Category[] = [
  //   {name: "Spor", id: 1},
  //   {name: "Günlük", id: 2},
  //   {name: "Sneaker", id: 3},
  //   {name: "Bot", id: 4},
  //   {name: "Outdoor", id: 5}
  // ];


  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      data=>this.categories=data
    )
  }

}
