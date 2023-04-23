import { SearchOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';

import { InputStyled, SpaceStyled, AutoCompleteStyled } from './InputSearchProduct.style'
import { IInputSearchProductViewProps } from './InputSearchProduct.interface';

function InputSearchProductView(props: IInputSearchProductViewProps) {
    const { handleSubmit, inputValue, filteredList, onSearch } = props

    return (
        <form onSubmit={() => handleSubmit()}>
            <SpaceStyled>
                <AutoCompleteStyled
                    value={inputValue}
                    allowClear={true}
                    suffixIcon={
                        <Icon
                            type='search'
                        />
                    }
                    options={filteredList}
                    onChange={(e) => { onSearch(e, false); }}
                    onSelect={(e) => { onSearch(e, true); }}
                    showSearch={true}
                    onKeyDown={(e) => {
                        if (e?.key === 'Enter') {
                            handleSubmit(e);
                        }
                    }}
                >
                    <InputStyled
                        autoFocus
                        prefix={
                            <SearchOutlined
                                className='icon-search'
                                type='search'
                            />}
                        placeholder={'Buscar produtos'}
                    />
                </AutoCompleteStyled>
            </SpaceStyled>
        </form>
    )
}

export default InputSearchProductView;