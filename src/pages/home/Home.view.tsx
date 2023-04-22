import React from 'react';
import { Container, ContainerProduct, Teste, ContainerLoading, PaginationContainer } from './Home.style';
import { Col, Row, Spin } from 'antd';
import TitleSearch from '../../components/titleSearch/TitleSearch';
import FoundItemsCount from '../../components/foundItemsCount/FoundItemsCount';
import ProductCard from '../../components/productCard/ProductCard';
import SelectItensPerPage from '../../components/selectItensPerPage/SelectItensPerPage';
import SearchPagination from '../../components/searchPagination/SearchPagination';
import { LoadingOutlined } from '@ant-design/icons';

function HomeView(props: any) {
    const { productslist, currentPage, totalItens, itensPerPage, onChange, onChangeSelectItens, loadingRequest } = props

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
                            productslist?.map((product: any, idx: number) => (
                                <Col span={4} xs={24} md={12} lg={6} key={idx}>
                                    <ProductCard product={product} />
                                </Col>
                            ))
                            :
                            <ContainerLoading>
                                <Spin indicator={<LoadingOutlined style={{ fontSize: 54 }} spin={loadingRequest} color='red' />} />
                            </ContainerLoading>
                        }
                    </Teste>
                </Row>

                <PaginationContainer>
                    <Col span={12}>
                        <SelectItensPerPage
                            onChange={onChangeSelectItens}
                            itensPerPage={itensPerPage}
                        />
                    </Col>
                    <Col span={12}>
                        <SearchPagination
                            currentPage={currentPage}
                            itensPerPage={itensPerPage}
                            onChange={onChange}
                            totalItens={totalItens}
                        />
                    </Col>
                </PaginationContainer>
            </ContainerProduct>
        </Container >
    )
}

export default HomeView;
