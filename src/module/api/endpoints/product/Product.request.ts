import RestApi from '../../RestApi';
import { IResponse } from '../../../model';
import { IProductDTO, ISearchProductInput,ISearchProductOutput } from './Product.interface';

export default class ProductRequest {
    public static URL_PRODUCT = `${RestApi.URL}/product`;

    public static SearchProduct(dto: ISearchProductInput): Promise<IResponse<ISearchProductOutput>> {
        return RestApi.httpGet(`${ProductRequest.URL_PRODUCT}/searchProduct?term=${dto.term}&page=${dto.page}&itens=${dto.itens}`).then((response) => response);
    }
}