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
                    { value: 5, label: '5 produtos por página' },
                    { value: 10, label: '10 produtos por página' },
                    { value: 20, label: '20 produtos por página' },
                    { value: 30, label: '30 produtos por página' },
                ]}
            />
        </Container>
    )
}

export default SelectItensPerPage;