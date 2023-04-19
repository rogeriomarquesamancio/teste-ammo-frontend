import React, { useContext } from 'react';
import TitleSearchView from "./TitleSearch.view";
import { GlobalContext } from '../../providers/global/GlobalProvider';


function TitleSearch() {

    const { search, setSearch } = useContext(GlobalContext);
    console.log(search)
    return (
        <TitleSearchView
            titleValue={search}
        />
    )
}

export default TitleSearch;