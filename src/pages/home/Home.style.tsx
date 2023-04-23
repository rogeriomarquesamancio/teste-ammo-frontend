import styled from 'styled-components';

const Container = styled('div')(() => ({
    paddingInline: '40px',
    paddingTop: '0px !important',
    padding: '10px',
    height: '80vh',
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
}));

export { Container };