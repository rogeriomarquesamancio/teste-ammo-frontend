import { useContext, useEffect, useState } from 'react';
import HomeView from './Home.view';
import { GlobalContext } from '../../providers/global/GlobalProvider';
import { useDoRequest } from '../../hooks';
import { ISearchProductInput } from '../../module/api/endpoints/product/Product.interface';

function Home() {

    const [productsInfo, setProductsInfo] = useState<any>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itensPerPage, setItensPerPage] = useState<number>(5);
    const { search } = useContext(GlobalContext);

    const searchCategory = useDoRequest((api) => api.Product.SearchProduct);

    function getProductListByTerm(page: number, itens: number) {
        console.log(search)
        let dto: ISearchProductInput = {
            term: search,
            page: page,
            itens: itens,
        }
        searchCategory.doRequest(dto).then((response) => {
            console.log(response.data)
            setCurrentPage(page)
            setProductsInfo(response.data)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
        })
    }
    function onChangeSelectItens(page: any) {
        getProductListByTerm(1, page)
        setItensPerPage(page)
    }

    useEffect(() => {
        if(!search) return;
        getProductListByTerm(currentPage, itensPerPage)
    }, [search]);


    function onChange(page: any) {
        getProductListByTerm(page, itensPerPage)

    }

    return (
        <HomeView
            productslist={productsInfo?.productList}
            currentPage={currentPage}
            totalItens={productsInfo?.totalItens}
            itensPerPage={itensPerPage}
            onChangeSelectItens={onChangeSelectItens}
            onChange={onChange}
        />
    )
}

export default Home;