import { IProductDTO } from "../../module/api/endpoints/product/Product.interface";

export interface IProductCardPropsInterface {
    product: IProductDTO
}

export interface IProductCardViewInterface {
    changeSrc?: any,
    src: string,
    firstImage: string,
    secondImage: string,
    formatedOriginalPrice: number | string,
    formatedPrice: number | string,
    product: IProductDTO,
}
