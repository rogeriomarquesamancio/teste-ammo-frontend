import React from 'react';
import { Image, Col, Row, Input, Select } from 'antd';
import styled from 'styled-components';
import { ContainerHeader } from './MainHeader.style'

function MainHeader() {

    return (
        <ContainerHeader>
            <Row>
                <Col span={18}>
                    <Image
                        src="https://img.catalogos365.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://ofertas-chile.s3.us-west-2.amazonaws.com/Mmartan_db548a7863.png"
                        width={150}
                        preview={false}
                    />
                </Col>
                <Col span={6}>
                    <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="Search to Select"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        defaultActiveFirstOption={false}
                        showArrow={false}
                        options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            {
                                value: '3',
                                label: 'Communicated',
                            },
                            {
                                value: '4',
                                label: 'Identified',
                            },
                            {
                                value: '5',
                                label: 'Resolved',
                            },
                            {
                                value: '6',
                                label: 'Cancelled',
                            },
                        ]}
                    />

                </Col>
            </Row>
        </ContainerHeader>
    );
}

export default MainHeader;
