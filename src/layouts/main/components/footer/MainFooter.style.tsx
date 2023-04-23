import styled from 'styled-components';

const StyledText = styled('div')({
    color: '#544E48'
});

const ContainerFooter = styled('div')({
    backgroundColor: '#eeedf2',
    left: '0',
    bottom: '0',
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    marginTop: '20px',
    paddingTop: '40px',
    paddingBottom: '40px',
});

export { ContainerFooter, StyledText };