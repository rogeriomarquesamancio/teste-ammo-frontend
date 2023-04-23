import { Pagination } from "antd";
import { Container } from "./SearchPagination.style";
import { ISearchPaginationViewInterface } from './SearchPagination.interface';

function SearchPaginationView(props: ISearchPaginationViewInterface) {
    const { itensPerPage, onChange, totalItens, currentPage } = props

    return (
        <Container lg={12} xs={24} sm={12}>
            <Pagination
                current={currentPage}
                total={totalItens}
                onChange={onChange}
                pageSize={itensPerPage}
            />
        </Container>
    )
}

export default SearchPaginationView;