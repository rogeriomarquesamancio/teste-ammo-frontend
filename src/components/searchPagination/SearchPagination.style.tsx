import styled from 'styled-components';
import { Col } from 'antd';

const Container = styled(Col)(() => ({
    justifyContent: 'flex-end',
    paddingLeft: '10px',
    display: 'flex',
    '@media(min-width: 250px) and (max-width: 575px)': {
        paddingTop: '20px',
        justifyContent: 'center !important',
        display: 'flex'
    },
}));

export { Container };