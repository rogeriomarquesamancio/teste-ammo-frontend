import { Container, ContainerProduct, Teste, ContainerLoading, PaginationContainer } from './Search.style';
import { Col, Row, Spin } from 'antd';
import TitleSearch from '../../components/titleSearch/TitleSearch';
import FoundItemsCount from '../../components/foundItemsCount/FoundItemsCount';
import ProductCard from '../../components/productCard/ProductCard';
import SelectItensPerPage from '../../components/selectItensPerPage/SelectItensPerPage';
import SearchPagination from '../../components/searchPagination/SearchPagination';
import { LoadingOutlined } from '@ant-design/icons';
import NotFoundProduct from '../../components/notFoundProduct/NotFoundProduct';

function SearchView(props: any) {
    const { productslist, currentPage, totalItens, itensPerPage, onChange, onChangeSelectItens, loadingRequest, hasSearchText, hasLoadingData } = props
    return (
        <Container>
            <Row>
                <TitleSearch />
            </Row>
            <ContainerProduct>
                <Row>
                    <Col span={24}>
                        <FoundItemsCount totalItens={totalItens} />
                    </Col>
                    <Teste>
                        {!loadingRequest ?
                            productslist?.length && hasSearchText ?
                                productslist?.map((product: any, idx: number) => (
                                    <Col span={4} xs={24} md={12} lg={6} key={idx}>
                                        <ProductCard product={product} />
                                    </Col>
                                ))
                                : hasLoadingData && <>
                                    <NotFoundProduct />
                                </>
                            :
                            <ContainerLoading>
                                <Spin indicator={<LoadingOutlined style={{ fontSize: 54 }} spin={loadingRequest} color='red' />} />
                            </ContainerLoading>
                        }
                    </Teste>
                </Row>
                <PaginationContainer>
                    <SelectItensPerPage
                        onChange={onChangeSelectItens}
                        itensPerPage={itensPerPage}
                    />
                    <SearchPagination
                        currentPage={currentPage}
                        itensPerPage={itensPerPage}
                        onChange={onChange}
                        totalItens={totalItens}
                    />
                </PaginationContainer>
            </ContainerProduct>
        </Container >
    )
}

export default SearchView;
