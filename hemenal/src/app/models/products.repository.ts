import { Product } from "./product";

export class ProductRepository{
    products: Product[];
    constructor(){
        this.products = [
            {id:1, categoryId:1, title:"Converse Chuck Allstar", imageUrl:"01.jpg", brand: "Converse", price: 1950, isPopular: false},
            {id:2, categoryId:1, title:"Converse Chuck Allstar Beyaz", imageUrl:"02.jpg", brand: "Converse", price: 1850, isPopular: false},
            {id:3, categoryId:1, title:"Timberland Bot", imageUrl:"03.jpg", brand: "Timberland", price: 2450, isPopular: false},
            {id:4, categoryId:1, title:"Super Star", imageUrl:"04.jpg", brand: "Adidas", price: 1750, isPopular: false},
            {id:5, categoryId:1, title:"Nike Air Lethear", imageUrl:"05.jpg", brand: "Nike", price: 2050, isPopular: true}
        ]
    }
    getProducts():Product[]{
        return this.products
    }

    getPopularProducts():Product[]{
        return this.products.filter(data=>data.isPopular)
    }
    
    
}