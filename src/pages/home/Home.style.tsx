import styled from 'styled-components';

const Container = styled('div')(() => ({
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '10px',
    padding: '10px'
}));

const ContainerTetse = styled('div')(() => ({
    padding: '20px',
}));


export { Container, ContainerTetse };