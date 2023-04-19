
import styled from 'styled-components';
import { Button } from 'antd';

const MyBetterAntDButton = styled(Button)(() => ({
    color: 'red',
    display: 'flex',
    justifyContent: 'center',
}));


const ContainerHeader = styled('div')(() => ({
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '10px',
}));


export { MyBetterAntDButton, ContainerHeader };