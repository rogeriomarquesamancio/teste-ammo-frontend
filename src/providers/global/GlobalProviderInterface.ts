import { IProductDTO } from "../../module/api/endpoints/product/Product.interface"

export interface IGlobalProviderContextProps {
    children: JSX.Element
};

export interface IGlobalInterface {
    example: any,
    setExample: any,
};

export interface IGlobalContext {
    search?: string,
    setSearch: React.Dispatch<React.SetStateAction<string | undefined>>,
    productsInfo?: IProductDTO,
    setProductsInfo: React.Dispatch<React.SetStateAction<IProductDTO | undefined>>
};