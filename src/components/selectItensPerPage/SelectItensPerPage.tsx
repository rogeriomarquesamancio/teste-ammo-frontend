import enumProductsPerPage from "../../enum/enumProductsPage";
import { ISelectItensPerPageViewInterface } from "./SelectItensPerPage.interface";
import SelectItensPerPageView from "./SelectItensPerPage.view";

// Input para selecionar itens por páginas
function SelectItensPerPage(props: ISelectItensPerPageViewInterface) {
    const { onChange, itensPerPage } = props
    const enumlist = [
        {
            value: enumProductsPerPage.EIGHT_PER_PAGE,
            label: '8 produtos por página'
        },
        {
            value: enumProductsPerPage.SIXTEEN_PER_PAGE,
            label: '16 produtos por página'
        },
        {
            value: enumProductsPerPage.SIXTY_FOUR_PER_PAGE,
            label: '32 produtos por página'
        }
    ]

    return (
        <SelectItensPerPageView
            onChange={onChange}
            itensPerPage={itensPerPage}
            optionsList={enumlist}
        />
    )
}

export default SelectItensPerPage;