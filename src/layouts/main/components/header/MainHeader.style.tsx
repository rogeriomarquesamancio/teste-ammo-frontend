
import styled from 'styled-components';
import { Button, Col } from 'antd';

const MyBetterAntDButton = styled(Button)(() => ({
    color: 'red',
    display: 'flex',
    justifyContent: 'center',
}));


const ContainerHeader = styled('div')(() => ({
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '10px',
    '@media(min-width: 0px) and (max-width: 765px)': {
        paddingLeft: '20px',
        paddingRight: '20px',
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

export { MyBetterAntDButton, ContainerHeader, InputSearchContainer, ImageContainer };