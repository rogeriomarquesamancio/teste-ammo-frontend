import { Container } from './Home.style';
import { Col, Row } from 'antd';
import TitleSearch from '../../components/titleSearch/TitleSearch';
import FoundItemsCount from '../../components/foundItemsCount/FoundItemsCount';
import ProductCard from '../../components/productCard/ProductCard';
import SelectItensPerPage from '../../components/selectItensPerPage/SelectItensPerPage';
import SearchPagination from '../../components/searchPagination/SearchPagination';

function HomeView(props: any) {
    const { productslist, currentPage, totalItens, itensPerPage, onChange, onChangeSelectItens } = props
    return (
        <Container>
            <Row>
                <TitleSearch />
            </Row>
            <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                <Row >
                    <Col span={24}>
                        <FoundItemsCount totalItens={totalItens} />
                    </Col>
                    {productslist?.map((product: any, idx: number) => (
                        <Col span={4} xs={24} md={4} key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                    {productslist?.map((product: any, idx: number) => (
                        <Col span={4} xs={24} md={4} key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                    {productslist?.map((product: any, idx: number) => (
                        <Col span={4} xs={24} md={4} key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>

                <Row>
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
                </Row>
            </div>
        </Container >
    )
}

export default HomeView;
