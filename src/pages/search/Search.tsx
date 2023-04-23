import { useContext, useEffect, useState } from 'react';
import { message } from 'antd';

import { useDoRequest } from '../../hooks';
import { GlobalContext } from '../../providers/global/GlobalProvider';
import { ISearchProductInput, ISearchProductOutput } from '../../module/api/endpoints/product/Product.interface';

import SearchView from './Search.view';
import enumProductsPerPage from '../../enum/enumProductsPage';

function Search() {
    const [productsInfo, setProductsInfo] = useState<ISearchProductOutput>(); // Váriavel com a lista de produtos e informação da paginação
    const [currentPage, setCurrentPage] = useState<number>(1); // Página atual
    const [itensPerPage, setItensPerPage] = useState<number>(enumProductsPerPage.EIGHT_PER_PAGE); // Itens por página
    const [hasLoadData, setLoadingData] = useState<boolean>(false); // Variável responsável por confirmar o recebimento dos dados

    const { searchText } = useContext(GlobalContext); // Informação salva no context

    const searchCategory = useDoRequest((api) => api.Product.SearchProduct); // API Buscar produto páginado por termo

    // UseEffect para buscar listagem de produtos
    useEffect(() => {
        if (!searchText) return;

        getProductListByTerm(currentPage, itensPerPage)
    }, [searchText]);

    // Request para buscar listagem de produtos
    function getProductListByTerm(page: number, itens: number) {
        let dto: ISearchProductInput = {
            term: searchText,
            page: page,
            itens: itens,
        }

        searchCategory.doRequest(dto).then((response) => {
            if (response?.data) {
                window.scrollTo(0, 0)
                setCurrentPage(page)
                setProductsInfo(response.data)
                setLoadingData(true)
            }
        }).catch(() => {
            message.error('Ocorreu um erro ao buscar produtos!');
        })
    }

    // Mudança ao selecionar produtos por página
    function onChangeSelectItens(page: number) {
        getProductListByTerm(1, page)
        setItensPerPage(page)
    }

    // Mudança na paginação
    function onChangePagination(page: number) {
        getProductListByTerm(page, itensPerPage)
    }

    return (
        <SearchView
            productslist={productsInfo?.productList}
            currentPage={currentPage}
            totalItens={productsInfo?.totalItens || 0}
            itensPerPage={itensPerPage}
            loadingRequest={searchCategory.loading}
            hasLoadData={hasLoadData}
            onChangeSelectItens={onChangeSelectItens}
            onChangePagination={onChangePagination}
        />
    )
}

export default Search;
