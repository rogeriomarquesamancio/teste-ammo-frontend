import React, { useContext } from 'react';
import SearchPaginationView from "./SearchPagination.view";
import { GlobalContext } from '../../providers/global/GlobalProvider';


function SearchPagination() {

    const { search, setSearch } = useContext(GlobalContext);
    return (
        <SearchPaginationView
            titleValue={search}
        />
    )
}

export default SearchPagination;