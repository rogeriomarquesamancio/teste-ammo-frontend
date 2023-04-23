import { Col, Row, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import TitleSearch from '../../components/titleSearch/TitleSearch';
import ProductCard from '../../components/productCard/ProductCard';
import NotFoundProduct from '../../components/notFoundProduct/NotFoundProduct';
import FoundItemsCount from '../../components/foundItemsCount/FoundItemsCount';
import SearchPagination from '../../components/searchPagination/SearchPagination';
import SelectItensPerPage from '../../components/selectItensPerPage/SelectItensPerPage';

import { IProductDTO } from '../../module/api/endpoints/product/Product.interface';

import { ISearchViewProps } from './Search.interface';
import { Container, ContainerProduct, ContainerProductList, ContainerLoading, PaginationContainer } from './Search.style';

function SearchView(props: ISearchViewProps) {
    const { productslist,
        currentPage,
        totalItens,
        itensPerPage,
        onChangePagination,
        onChangeSelectItens,
        loadingRequest,
        hasLoadData
    } = props

    return (
        <Container>
            <Row>
                <TitleSearch />
            </Row>
            <ContainerProduct>
                <Row>
                    <Col span={24}> {/* Componente itens encontrados */}
                        <FoundItemsCount totalItens={totalItens} />
                    </Col>
                    <ContainerProductList>
                        {!loadingRequest ?
                            productslist?.length ?
                                productslist?.map((product: IProductDTO, idx: number) => (
                                    <Col span={4} xs={24} md={12} lg={6} key={idx}>  {/* Componente card de produtos */}
                                        <ProductCard product={product} />
                                    </Col>
                                ))
                                : hasLoadData &&
                                <NotFoundProduct />  /* Componente de aviso ao usuário caso produto não encontrado */
                            :
                            <ContainerLoading>   {/* Loading */}
                                <Spin indicator={
                                    <LoadingOutlined
                                        className='loading-icon'
                                        spin={loadingRequest}
                                    />}
                                />
                            </ContainerLoading>
                        }
                    </ContainerProductList>
                </Row>
                <PaginationContainer>
                    <SelectItensPerPage  /* Input select para mostrar itens por página */
                        onChange={onChangeSelectItens}
                        itensPerPage={itensPerPage}
                    />
                    <SearchPagination  /* Paginação */
                        currentPage={currentPage}
                        itensPerPage={itensPerPage}
                        onChange={onChangePagination}
                        totalItens={totalItens}
                    />
                </PaginationContainer>
            </ContainerProduct>
        </Container >
    )
}

export default SearchView;
