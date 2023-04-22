import { useEffect, useState } from 'react';
import { Col, Row, Skeleton } from 'antd';
import { CardStyled, ImgStyled, ContainerCard, NameStyled, OriginalPriceStyled, PromotionalPriceStyled } from './ProductCard.style'

function ProductCard(props: any) {
    const { product } = props;
    const [src, setSrc] = useState<string>(product.images[0].src);

    useEffect(() => {
        return () => {
            setSrc(product.images[0].src)
        };
    }, []);

    function formatCurrency(value: any) {
        if (!value) return 0;
        let teste = value.toLocaleString('pt-br', {
            style: 'decimal',
            currency: 'BRL',
        })
        return teste
    }

    return (
        <ContainerCard>
            <CardStyled>
                <ImgStyled
                    style={{ maxWidth: '100%', height: 'auto', width: '100%' }}
                    src={src}
                    onMouseEnter={() => product.images[1] ? setSrc(product.images[1].src) : null}
                    onMouseLeave={() => setSrc(product.images[0].src)}
                />
                <Row>
                    <Col span={24} style={{ minHeight: '50px' }}>
                        <NameStyled>
                            {product.name}
                        </NameStyled>
                    </Col>
                    <Col span={24}>
                        {product?.promotionalPrice ?
                            <PromotionalPriceStyled>
                                {'De '}
                                <span className='promotional-text'>
                                    {formatCurrency(product.originalPrice)}
                                </span>
                                {' por:'}
                            </PromotionalPriceStyled>
                            : <PromotionalPriceStyled>
                                {'Compre agora por:'}
                            </PromotionalPriceStyled>
                        }
                        <OriginalPriceStyled>
                            {`R$ ${formatCurrency(product?.promotionalPrice ? product.promotionalPrice : product.originalPrice)}`}
                        </OriginalPriceStyled>
                    </Col>
                </Row>
            </CardStyled>
        </ContainerCard >
    )
}

export default ProductCard;