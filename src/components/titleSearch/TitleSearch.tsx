import { useContext } from 'react';
import TitleSearchView from "./TitleSearch.view";
import { GlobalContext } from '../../providers/global/GlobalProvider';


function TitleSearch() {

    const { search } = useContext(GlobalContext);
    return (
        <TitleSearchView
            titleValue={search}
        />
    )
}

export default TitleSearch;