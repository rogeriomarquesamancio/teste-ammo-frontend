import React, { useState } from 'react';
import { Container } from './Home.style';
import { Col, Row } from 'antd';
import TitleSearch from '../../components/titleSearch/TitleSearch';
function HomeView() {

    const [modalStatus, setModalStatus] = useState(false);

    return (
        <Container>
            <Row>
                <TitleSearch />
            </Row>
            <span style={{ backgroundColor: "red", height: "30px" }}>
                MAIN
            </span>
        </Container>
    )
}

export default HomeView;
