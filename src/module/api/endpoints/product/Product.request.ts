import RestApi from '../../RestApi';
import { IResponse } from '../../../model';
import { IProductDTO, ISearchProductInput } from './Product.interface';

export default class ProductRequest {
    public static URL_PRODUCT = `${RestApi.URL}/product`;


    public static SearchProduct(dto: ISearchProductInput): Promise<IResponse<IProductDTO[]>> {
        return RestApi.httpGet(`${ProductRequest.URL_PRODUCT}/searchProduct?term=${dto.term}&page=${dto.page}&itens=${dto.itens}`).then((response) => response);
    }
}