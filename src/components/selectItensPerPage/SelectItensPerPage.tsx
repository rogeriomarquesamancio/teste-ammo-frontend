import { SelectStyled, Container } from "./SelectItensPerPage.style";

function SelectItensPerPage(props: any) {

    const { onChange, itensPerPage } = props
    return (
        <Container lg={12} xs={24} sm={12}>
            <SelectStyled
                style={{ width: '220px' }}
                onChange={onChange}
                value={itensPerPage}
                options={[
                    { value: 8, label: '8 produtos por página' },
                    { value: 16, label: '16 produtos por página' },
                    { value: 32, label: '32 produtos por página' },
                    { value: 64, label: '64 produtos por página' },
                ]}
            />
        </Container>
    )
}

export default SelectItensPerPage;