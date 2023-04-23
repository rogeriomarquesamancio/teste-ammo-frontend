import { IInputSearchProductViewProps } from './InputSearchProduct.interface';
import InputSearchProductView from './InputSearchProduct.view';

// Componente input de busca de produtos
function InputSearchProduct(props: IInputSearchProductViewProps) {
    const { handleSubmit, inputValue, filteredList, onSearch } = props
    
    return (
        <InputSearchProductView
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            filteredList={filteredList}
            onSearch={onSearch}
        />
    )
}

export default InputSearchProduct;