import React, { useState } from 'react';
import { Col, Row } from 'antd';
import HomeView from './Home.view';

function Home() {

    const [modalStatus, setModalStatus] = useState(false);

    return (
        <HomeView />
    )
}

export default Home;
