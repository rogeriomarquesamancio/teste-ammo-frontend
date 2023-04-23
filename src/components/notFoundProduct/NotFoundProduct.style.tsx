import styled from 'styled-components';

const Text = styled('h1')(({
    marginTop: '60px',
    color: '#806C5C'
}));

const ContainerImage = styled('div')(({
    justifyContent: 'center',
    display: 'flex',
}));


export {
    Text,
    ContainerImage
};