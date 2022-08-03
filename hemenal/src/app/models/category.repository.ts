import { Category } from "./category";

export class CategoryRepository{
    categories: Category[];
    constructor(){
        this.categories = [
            {name: "Spor", id: 1},
            {name: "Günlük", id: 2},
            {name: "Sneaker", id: 3},
            {name: "Bot", id: 4},
            {name: "Outdoor", id: 5}
        ]
    }
    getCategories():Category[]{
        return this.categories;
    }
}