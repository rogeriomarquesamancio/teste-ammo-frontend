import styled from 'styled-components';

const Text = styled('h1')(({
    marginTop: '60px',
    color: '#806C5C',
    textAlign: 'center'
}));

const ContainerImage = styled('div')(({
    justifyContent: 'center',
    display: 'flex',
}));

const Container = styled('div')(({
    width: '100%'
}));

export {
    Text,
    ContainerImage,
    Container
};