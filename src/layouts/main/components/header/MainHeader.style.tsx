
import styled from 'styled-components';
import { Button, Col, Image as AntdImage } from 'antd';

const MyBetterAntDButton = styled(Button)(() => ({
    color: 'red',
    display: 'flex',
    justifyContent: 'center',
}));


const ContainerHeader = styled('div')(() => ({
    paddingInline: '40px',
    paddingTop: '20px',
    paddingBottom: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0 2px 2px 0.1px',
    '@media(min-width: 0px) and (max-width: 765px)': {
        paddingInline: '20px',
    },
}));

const InputSearchContainer = styled(Col)(() => ({
    '@media(min-width: 0px) and (max-width: 770px)': {
        justifyContent: 'center',
        marginTop: "20px"
    },
}));

const ImageContainer = styled(Col)(() => ({
    '@media(min-width: 0px) and (max-width: 765px)': {
        justifyContent: 'center',
        display: 'flex'
    },
}));

const Image = styled(AntdImage)(() => ({
    maxWidth: '150px',
    cursor: 'pointer'
}));


export { MyBetterAntDButton, ContainerHeader, InputSearchContainer, ImageContainer, Image };