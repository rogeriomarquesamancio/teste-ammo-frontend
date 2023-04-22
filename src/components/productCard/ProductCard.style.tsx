import { Card, Col } from 'antd';
import styled from 'styled-components';

const CardStyled = styled(Card)(({
    borderRadius: '8px',
    overflow: 'hidden',
    '.ant-card-body': {
        padding: '0.1px',
    },
    ':hover': {
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 12px 0px',
        border: '1px solid rgba(153, 137, 124, 0.5)'
    },
}));
const ContainerCard = styled('div')(({
    padding: '10px',
}));

const ImgStyled = styled('img')(({
    borderRadius: '6px 6px 0 0'
}));

export { CardStyled, ImgStyled,ContainerCard };