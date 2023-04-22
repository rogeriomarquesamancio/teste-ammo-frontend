import React, { useContext } from 'react';
import SelectItensPerPageView from "./SelectItensPerPage.view";
import { GlobalContext } from '../../providers/global/GlobalProvider';
import { Container } from "./SelectItensPerPage.style";
import { Select } from 'antd';


function SelectItensPerPage(props: any) {

    const { onChange, itensPerPage } = props
    return (
        <Container span={24}>
            <Select
                defaultValue="lucy"
                style={{ width: '220px' }}
                onChange={onChange}
                value={itensPerPage}
                options={[
                    { value: 1, label: '1 produtos por página' },
                    { value: 5, label: '5 produtos por página' },
                ]}
            />
        </Container>
    )
}

export default SelectItensPerPage;