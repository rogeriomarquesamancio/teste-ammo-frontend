import { ISelectItensPerPageViewInterface } from "./SelectItensPerPage.interface";
import { SelectStyled, Container } from "./SelectItensPerPage.style";

function SelectItensPerPageView(props: ISelectItensPerPageViewInterface) {
    const { onChange, itensPerPage, optionsList } = props

    return (
        <Container lg={12} xs={24} sm={12}>
            <SelectStyled
                onChange={onChange}
                value={itensPerPage}
                options={optionsList}
            />
        </Container>
    )
}

export default SelectItensPerPageView;