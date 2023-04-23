import { useContext } from 'react';
import TitleSearchView from "./TitleSearch.view";
import { GlobalContext } from '../../providers/global/GlobalProvider';

// Componente para mostrar qual o termo pesquisado
function TitleSearch() {
    const { searchText } = useContext(GlobalContext);

    return (
        <TitleSearchView
            titleValue={searchText}
        />
    )
}

export default TitleSearch;