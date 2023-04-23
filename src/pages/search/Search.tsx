import { useContext, useEffect, useState } from 'react';

import { useDoRequest } from '../../hooks';
import { GlobalContext } from '../../providers/global/GlobalProvider';
import { ISearchProductInput } from '../../module/api/endpoints/product/Product.interface';
import SearchView from './Search.view';

function Search() {

    const [productsInfo, setProductsInfo] = useState<any>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itensPerPage, setItensPerPage] = useState<number>(8);
    const [hasLoadingData, setHasLoadingData] = useState<boolean>(false);

    const { search } = useContext(GlobalContext);

    const searchCategory = useDoRequest((api) => api.Product.SearchProduct);

    useEffect(() => {
        if (!search) return;
        getProductListByTerm(currentPage, itensPerPage)
    }, [search]);

    function getProductListByTerm(page: number, itens: number) {
        let dto: ISearchProductInput = {
            term: search,
            page: page,
            itens: itens,
        }
        searchCategory.doRequest(dto).then((response) => {
            window.scrollTo(0, 0)
            setCurrentPage(page)
            setProductsInfo(response.data)
            setHasLoadingData(true)
        }).catch((error) => {
            console.log(error)
        })
    }
    function onChangeSelectItens(page: any) {
        getProductListByTerm(1, page)
        setItensPerPage(page)
    }

    function onChange(page: any) {
        getProductListByTerm(page, itensPerPage)
    }

    return (
        <SearchView
            productslist={productsInfo?.productList}
            currentPage={currentPage}
            totalItens={productsInfo?.totalItens}
            itensPerPage={itensPerPage}
            onChangeSelectItens={onChangeSelectItens}
            loadingRequest={searchCategory.loading}
            hasSearchText={!!search && hasLoadingData}
            hasLoadingData={hasLoadingData}
            onChange={onChange}
        />
    )
}

export default Search;
