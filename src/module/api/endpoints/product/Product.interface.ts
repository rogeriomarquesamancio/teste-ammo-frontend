import { ICategoryDTO } from "../category/Category.interface"
import { IProductImageDTO } from "../productImage/ProductImage.interface"

export interface IProductDTO {
    idProduct: number,
    name: string,
    description: string,
    promotionalPrice?: number,
    originalPrice: number,
    idCategory: number,
    images: Array<IProductImageDTO>
    category: ICategoryDTO
}

export interface ISearchProductInput {
    term: string,
    page: number,
    itens: number
}

export interface ISearchProductOutput {
    pageCount: number,
    productList: Array<IProductDTO>,
    totalItens: number,
}

