import { Col } from 'antd';
import {
    CardStyled, ImgStyled, ContainerCard, NameStyled,
    OriginalPriceStyled, PromotionalPriceStyled, ContainerProductInfo
} from './ProductCard.style'
import { IProductCardViewInterface } from './ProductCard.interface';

function ProductCardView(props: IProductCardViewInterface) {
    const { product, src, firstImage, formatedOriginalPrice,
        formatedPrice, changeSrc, secondImage } = props;
    return (
        <ContainerCard>
            <CardStyled>
                <ImgStyled
                    src={src}
                    onMouseEnter={() => secondImage ? changeSrc(secondImage) : null}
                    onMouseLeave={() => changeSrc(firstImage)}
                />
                <ContainerProductInfo>
                    <Col span={24} style={{ minHeight: '50px' }}>
                        <NameStyled>
                            {product?.name}
                        </NameStyled>
                    </Col>
                    <Col span={24}>
                        {product?.promotionalPrice ?
                            <PromotionalPriceStyled>
                                {'De '}
                                <span className='promotional-text'>
                                    {formatedOriginalPrice}
                                </span>
                                {' por:'}
                            </PromotionalPriceStyled>
                            : <PromotionalPriceStyled>
                                {'Compre agora por:'}
                            </PromotionalPriceStyled>
                        }
                        <OriginalPriceStyled>
                            {`R$ ${formatedPrice}`}
                        </OriginalPriceStyled>
                    </Col>
                </ContainerProductInfo>
            </CardStyled>
        </ContainerCard>
    )
}

export default ProductCardView;