import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../providers/global/GlobalProvider';
import { Card, Col, Divider, Row } from 'antd';
import { CardStyled, ImgStyled, ContainerCard } from './ProductCard.style'

function ProductCard(props: any) {
    const { product } = props;
    console.log(product)
    const [src, setSrc] = useState<string>(product.images[0].src);
    return (
        <ContainerCard>
            <CardStyled>
                <ImgStyled
                    style={{ maxWidth: '100%', height: 'auto' }}
                    src={src}
                    onMouseEnter={() => setSrc(product.images[1].src)}
                    onMouseLeave={() => setSrc(product.images[0].src)}
                />
                <Row>
                    <Col span={24} style={{ minHeight: '40px' }}>
                        {product.name}
                    </Col>
                    <Col span={24}>
                        {`R$ ${product.originalPrice}`}
                    </Col>
                </Row>
            </CardStyled>
        </ContainerCard >
    )
}

export default ProductCard;