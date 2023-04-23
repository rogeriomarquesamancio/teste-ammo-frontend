import { Col, Row } from 'antd';
import styled from 'styled-components';

const Text = styled('h1')(({
    marginTop: '60px',
    color: '#806C5C',
    textAlign: 'center',
}));

const ContainerImage = styled(Col)(({
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
}));

const Container = styled(Row)(({
    alignItems: 'center',
    alignContent: 'center',
}));


const ContainerText = styled(Col)(({
    width: '100%',
    display: 'flex',
    justifyContent: 'center !important',
}));

export {
    Text,
    ContainerImage,
    Container,
    ContainerText
};