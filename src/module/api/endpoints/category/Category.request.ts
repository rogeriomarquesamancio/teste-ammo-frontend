import RestApi from '../../RestApi';
import { IResponse } from '../../../model';
import { ICategoryDTO, ISearchCategoryInput } from './Category.interface';

export default class CategoryRequest {
    public static URL_CATEGORY = `${RestApi.URL}/category`;

    public static SearchCategory(dto: ISearchCategoryInput): Promise<IResponse<ICategoryDTO[]>> {
        return RestApi.httpGet(`${CategoryRequest.URL_CATEGORY}/searchByTerm?term=${dto.term}`).then((response) => response);
    }
}
