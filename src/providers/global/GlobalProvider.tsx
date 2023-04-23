import { useState, createContext } from 'react';

import { IGlobalContext, IGlobalProviderContextProps } from './GlobalProviderInterface';
import { IProductDTO } from '../../module/api/endpoints/product/Product.interface';

const GlobalContext = createContext({} as IGlobalContext);

function GlobalProvider(props: IGlobalProviderContextProps) {

    const { children } = props;

    // Váriaveis salvas no context
    const [searchText, setSearchText] = useState<string>();
    const [productsInfo, setProductsInfo] = useState<IProductDTO>();
    
    const sharedValue: IGlobalContext = {
        searchText,
        setSearchText,
    };

    return (
        <GlobalContext.Provider value={sharedValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext };