import { Pagination } from "antd";
import { Container } from "./SearchPagination.style";


function SearchPaginationView(props: any) {
    const { itensPerPage, onChange, totalItens, currentPage } = props

    return (
        <Container span={24}>
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