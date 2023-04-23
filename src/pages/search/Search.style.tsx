import styled from 'styled-components';
import { Row } from 'antd';

const Container = styled('div')(() => ({
    paddingTop: '2px',
}));

const ContainerProduct = styled('div')(() => ({
    padding: '20px',
    '@media(min-width: 1366px)': {
        paddingInline: '200px'
    },
    '@media(min-width: 770px) and (max-width: 1366px)': {
        paddingInline: '30px'
    },
    '@media(min-width: 0px) and (max-width: 750px)': {
        paddingInline: '0px'
    },
}));

const ContainerProductList = styled(Row)(() => ({
    minHeight: '64vh',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
}));

const ContainerLoading = styled(Row)(() => ({
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    '.loading-icon': {
        fontSize: '54px',
        color: '#DFBE7F'
    },
}));

const PaginationContainer = styled(Row)(() => ({
    marginTop: '30px'
}));

export {
    Container,
    ContainerProduct,
    ContainerProductList,
    ContainerLoading,
    PaginationContainer
};