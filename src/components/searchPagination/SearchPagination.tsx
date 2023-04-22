import { useContext } from 'react';
import SearchPaginationView from "./SearchPagination.view";
import { GlobalContext } from '../../providers/global/GlobalProvider';


function SearchPagination(props: any) {

    const { itensPerPage, onChange, totalItens, currentPage } = props
    const { search } = useContext(GlobalContext);

    return (
        <SearchPaginationView
            titleValue={search}
            itensPerPage={itensPerPage}
            onChange={onChange}
            totalItens={totalItens}
            currentPage={currentPage}
        />
    )
}

export default SearchPagination;