
export interface IProductDTO {
    idProduct: number,
    name: string,
    description: string,
    promotionalPrice?: number,
    originalPrice: number,
    idCategory: number,
    images: any
    category: any
}

export interface ISearchProductInput {
    term: string,
    page: number,
    itens: number
}