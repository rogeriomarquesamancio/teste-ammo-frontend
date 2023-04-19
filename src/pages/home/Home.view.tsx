import React, { useState } from 'react';
import { Container } from './Home.style';
import { Col, Divider, Row } from 'antd';
import TitleSearch from '../../components/titleSearch/TitleSearch';
import FoundItemsCount from '../../components/foundItemsCount/FoundItemsCount';
import ProductCard from '../../components/productCard/ProductCard';

function HomeView(props: any) {
    const { listProduct } = props

    return (
        <Container>
            <Row>
                <TitleSearch />
            </Row>
            <Row>
                <Col span={24}>
                    <FoundItemsCount />
                </Col>
                <Col span={24}>
                    {listProduct.map((product: any, idx: number) => (
                        <Col span={24} key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}

                </Col>
            </Row>
        </Container >
    )
}

export default HomeView;
