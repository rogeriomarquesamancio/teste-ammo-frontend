import { Col, Select } from 'antd';
import styled from 'styled-components';

const SelectStyled = styled(Select)(() => ({
    paddingLeft: '10px',
    width: '220px',
    '@media(min-width: 250px) and (max-width: 770px)': {
        width: '320px !important',
    },
}));

const Container = styled(Col)(() => ({
    justifyContent: 'start',
    display: 'flex',
    '@media(min-width: 580) and (max-width: 770px)': {
        justifyContent: 'start !important',
    },
    '@media(min-width: 250px) and (max-width: 580px)': {
        justifyContent: 'center !important',
    },
}));


export { SelectStyled, Container };