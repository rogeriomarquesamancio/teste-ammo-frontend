import { useContext } from 'react';

import { GlobalContext } from '../../providers/global/GlobalProvider';
import SearchPaginationView from "./SearchPagination.view";
import { ISearchPaginationViewInterface } from './SearchPagination.interface';

// Componente paginação
function SearchPagination(props: ISearchPaginationViewInterface) {
    const { itensPerPage, onChange, totalItens, currentPage } = props
    const { searchText } = useContext(GlobalContext);
    
    return (
        <SearchPaginationView
            titleValue={searchText}
            itensPerPage={itensPerPage}
            onChange={onChange}
            totalItens={totalItens}
            currentPage={currentPage}
        />
    )
}

export default SearchPagination;