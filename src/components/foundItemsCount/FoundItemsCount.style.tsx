import { Col } from 'antd';
import styled from 'styled-components';

const DivTitle = styled('div')(({
    paddingBottom: '5px',
    cursor: 'pointer',
    justifyContent: 'flex-start',
    maxWidth: '200px',
    display: 'flex',
    marginBottom: '20px'
}));


const SpanTitle = styled('span')(({
    textTransform: 'uppercase',
    fontWeight: '400',
    borderBottom: '3px solid rgb(223, 190, 127)',
    color: 'rgb(56, 56, 57)',
}));

export { DivTitle, SpanTitle };