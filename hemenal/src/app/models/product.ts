export interface Product {
    id: number,
    categoryId: number,
    title: string,
    description?: string,
    imageUrl: string,
    brand: string,
    price: number,
    isPopular: boolean
}
