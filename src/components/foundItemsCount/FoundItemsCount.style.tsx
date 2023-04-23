import styled from 'styled-components';

const DivTitle = styled('div')(({
    paddingTop: '20px',
    paddingBottom: '5px',
    cursor: 'pointer',
    justifyContent: 'flex-start',
    maxWidth: '200px',
    display: 'flex',
    marginBottom: '20px',
    paddingLeft: '10px'
}));


const SpanTitle = styled('span')(({
    textTransform: 'uppercase',
    fontWeight: '400',
    borderBottom: '3px solid #DFBE7F',
    color: '#383839',
    fontSize: '0.9rem',
}));

export { DivTitle, SpanTitle };