import { IProductDTO } from "../../module/api/endpoints/product/Product.interface"

export interface ISearchViewProps {
    productslist?: Array<IProductDTO>,
    currentPage: number,
    totalItens: number,
    itensPerPage: number,
    loadingRequest: boolean,
    hasLoadData: boolean,
    onChangeSelectItens: any,
    onChangePagination: any,
}