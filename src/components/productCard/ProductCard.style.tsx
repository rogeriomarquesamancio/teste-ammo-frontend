import { Card, Row } from 'antd';
import styled from 'styled-components';

const CardStyled = styled(Card)(({
    borderRadius: '8px',
    overflow: 'hidden',
    border: '2px solid #f0f0f0',
    '.ant-card-body': {
        padding: '0.01px',
    },
    ':hover': {
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 12px 0px',
        border: '2px solid rgba(153, 137, 124, 0.5)'
    },
}));
const NameStyled = styled('span')(({
    padding: '5px',
    fontWeight: '700',
    display: 'inline-block',
    fontSize: '0.8rem',
    color: '#2d2d31',
}));

const ContainerCard = styled('div')(({
    padding: '10px',
}));

const OriginalPriceStyled = styled('span')(({
    paddingInline: '5px',
    fontSize: '15px',
    color: '#433e66',
    fontWeight: '400',
    paddingBottom: '5px'
}));

const PromotionalPriceStyled = styled('div')(({
    color: '#998990',
    fontSize: '0.8rem',
    paddingInline: '5px',
    '.promotional-text ': {
        textDecoration: 'line-through',
    },
}));

const ContainerProductInfo = styled(Row)(({
    marginBottom: '10px'
}));

const ImgStyled = styled('img')(({
    marginLeft: '0.1px',
    borderRadius: '6px 6px 0 0'
}));


export {
    CardStyled,
    ImgStyled,
    ContainerCard,
    NameStyled,
    OriginalPriceStyled,
    PromotionalPriceStyled,
    ContainerProductInfo
};